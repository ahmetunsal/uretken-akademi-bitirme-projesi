const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const User = require('../../models/User');
const Admin = require('../../models/Admin');
const Courses = require('../../models/Courses');
const Activities = require('../../models/Activities');
const Forms = require('../../models/Forms');
const Contact = require('../../models/Contact');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.json(err);
        res.status(200).json(users);
    });
});

router.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) res.json(err);
        res.json(user);
    });
});

router.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) res.json(err);
        res.json(user);
    });
});

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    User.findOneAndUpdate({ id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    }, { new: true }, (err, user) => {
        if (err) res.json(err);
        res.json(user);
    });
});

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    User.findOneAndDelete({ id }, (err, user) => {
        if (err) res.json(err);
        res.json(user);
    });
});


router.get('/admins/:id/add', async (req, res) => {
    const { id } = req.params;
    const admin = await Admin.find({});

    if (admin.admins?.includes(id)) return res.status(400).json({ message: 'Bu kullanıcı zaten admin!?!?', success: false });

    Admin.findOneAndUpdate({}, {
        $push: {
            admins: id
        }
    }, { upsert: true })
        .then(admin => res.status(200).json({ admin, success: true, message: "Admin eklendi! 😎" }))
        .catch(err => res.status(500).json(err));
});

router.get('/admins', async (req, res) => {
    const admins = await Admin.find({}).clone()
        .catch(err => res.status(500).json(err));
    //console.log(admins);
    res.status(200).json(admins);
});

router.get('/courses/:id/trainers/', async (req, res) => {
    const { id } = req.params;
    const course = await Courses.findOne({ id }).catch(err => res.status(500).json(err));
    res.status(200).json(course.courseInstructors);
});

router.post('/courses/:id/trainers/add', async (req, res) => {
    const { id } = req.params;
    const { trainerName, trainerPhoto } = req.body;

    const trainer = await Courses.findOneAndUpdate({ id }, {
        $push: {
            courseInstructors: { trainerName, trainerPhoto },
        }
    }, { upsert: true })
        .catch(err => res.status(500).json(err));
    res.status(200).json({ trainer, success: true, message: "Eğitmen başarıyla eklendi!" });
});

router.get('/courses/:id/lessons/', async (req, res) => {
    const { id } = req.params;
    const course = await Courses.findOne({ id }).catch(err => res.status(500).json(err));
    res.status(200).json(course.lessons);
});

router.post("/courses/:id/lesson/add/", async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const { lessonName, lessonDescription, lessonVideo } = req.body;

    const lesson = await Courses.findOneAndUpdate({ id }, {
        $push: {
            lessons: {
                id: (await createCourseId(10)),
                lessonName,
                lessonDescription,
                lessonVideo
            }
        }
    }, { upsert: true })
        .catch(err => res.status(500).json(err));
    res.status(200).json({ lesson, success: true, message: "Ders başarıyla eklendi!" });
});

router.put("/courses/:id/lesson/delete/:lessonId", async (req, res) => {
    const { id, lessonId } = req.params;
    console.log(id, lessonId)
    await Courses.findOneAndUpdate({ id }, {
        $pull: {
            lessons: {
                id: lessonId
            }
        }
    }, { upsert: true })
        .catch(err => res.status(500).json(err));
    res.status(200).json({ message: "Ders silindi! 😎", success: true });
});

router.get('/courses/:id', async (req, res) => {
    const { id } = req.params;
    const course = await Courses.findOne({ id }).catch(err => res.status(500).json(err));
    console.log(course)
    res.status(200).json(course);
});


router.post("/courses/add", async (req, res) => {
    const { courseName, courseTag, courseDate, coursePlace, courseLink, courseImg, courseDescription, courseLevel, courseFacilities, courseInstructors, courseInstructorImgs } = req.body;

    // create a new course
    const newCourse = new Courses({
        id: (await createCourseId(10)),
        courseName,
        courseTag,
        courseDate,
        coursePlace,
        courseLink,
        courseImage: courseImg,
        courseDescription,
        courseLevel,
        courseFacilities,
        courseInstructors,
        courseInstructorImgs
    });

    // save the course
    await newCourse.save()
        .catch(err => res.status(500).json(err));

    res.status(200).json({ message: "Kurs eklendi! 😎", success: true });
});

router.put("/courses/update/:id", async (req, res) => {
    const { id } = req.params;
    const { courseName, courseTag, courseDate, coursePlace, courseLink, courseImg, courseDescription, courseLevel, courseFacilities, courseInstructors, courseInstructorImgs } = req.body;
    await Courses.findOneAndUpdate({ id }, {
        $set: {
            courseName: courseName,
            courseTag: courseTag,
            courseDate: courseDate,
            coursePlace: coursePlace,
            courseLink: courseLink,
            courseImage: courseImg,
            courseDescription: courseDescription,
            courseLevel: courseLevel,
            courseFacilities: courseFacilities,
            courseInstructors: courseInstructors,
            courseInstructorImgs: courseInstructorImgs
        }
    }, { upsert: true })
        .catch(err => res.status(500).json(err));
    res.status(200).json({ message: "Kurs güncellendi! 😎", success: true });
});

router.delete("/courses/delete/:id", async (req, res) => {
    const { id } = req.query;
    await Courses.findOneAndDelete({ id })
        .catch(err => res.status(500).json(err));
    res.status(200).json({ message: "Kurs silindi! 😎", success: true });
});

router.get("/courses", async (req, res) => {
    const courses = await Courses.find({}).catch(err => res.status(500).json(err));
    //console.log("-------------------------------------------------------------")
    //console.log(courses);
    res.status(200).json(courses);
});


router.get("/activities", async (req, res) => {
    const activities = await Activities.find({}).catch((err) => res.status(500).json(err));
    res.status(200).json(activities);
});

router.get("/activities/:id", async (req, res) => {
    const { id } = req.params;
    const activity = await Activities.findOne({ id }).catch((err) => res.status(500).json(err));
    //console.log(activity);
    res.status(200).json(activity);
});

router.post("/activities/add", async (req, res) => {
    const {
        activityName,
        activityPlace,
        activityTag,
        activityImage,
        activityDate,
        activityDescription,
        activityURL,
    } = req.body;

    const newActivity = new Activities({
        id: (await createCourseId(10)),
        activityName,
        activityPlace,
        activityTag,
        activityImage,
        activityDate,
        activityDescription,
        activityURL
    });

    newActivity.save().then((activity) =>
        res
            .status(200)
            .json({ activity, success: true, message: "Etkinlik başarıyla eklendi!" }))
        .catch((err) => console.log(err));
});

router.put("/activities/update/:id", async (req, res) => {
    const { id } = req.params;
    const { activityName, activityPlace, activityTag, activityImage, activityDate, activityDescription, activityURL } = req.body;
    await Activities.findOneAndUpdate({ id }, {
        $set: {
            activityName: activityName,
            activityPlace: activityPlace,
            activityTag: activityTag,
            activityImage: activityImage,
            activityDate: activityDate,
            activityDescription: activityDescription,
            activityURL: activityURL,
        }
    }, { upsert: true })
        .catch(err => res.status(500).json(err));
    res.status(200).json({ message: "Etkinlik güncellendi! 😎", success: true });
});


router.delete("/activities/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Activities.findOneAndDelete({ id })
        .catch(err => res.status(500).json(err));
    res.status(200).json({ message: "Etkinlik silindi! 😎", success: true });
});

router.get(`/forms`, async (req, res) => {
    const forms = await Forms.find({}).catch(err => res.status(500).json(err));
    res.status(200).json(forms);
});


router.get(`/forms/:id`, async (req, res) => {
    const { id } = req.params;
    const forms = await Forms.find({ id }).catch(err => res.status(500).json(err));
    res.status(200).json(forms);
});

router.post('/forms/:id', async (req, res) => {
    const { id } = req.params;
    //console.log(req.body);

    Forms.findOneAndUpdate({ id }, {
        $push: {
            formAppliciants: req.body
        }
    }, { upsert: true })
        .then(form => res.status(200).json({ form, success: true, message: "Form başarıyla eklendi!" }))
        .catch(err => res.status(500).json(err));
});

const createCourseId = async (length) => {
    // make 7 number length random number for example 1234567
    const randomId = Math.floor(Math.random() * 9000000) + 1000000;
    return randomId;
}


router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    // send email to admin

    const newContact = new Contact({
        id: uuid.v4(),
        name,
        email,
        message
    });

    await newContact.save()
        .catch(err => res.status(500).json(err));
        
    res.status(200).json({ message: "Mesajınız başarıyla gönderildi! 😎", success: true });
});

module.exports = router;