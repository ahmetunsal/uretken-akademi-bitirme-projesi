const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const User = require('../../../models/User');
const Activities = require('../../../models/Activities');


router.get("/", (req, res) => {
    res.send("Activities");
});

router.get("/activities", (req, res) => {
    const activities = Activities.find({}, (err, activities) => {
        if (err) res.json(err);
        res.status(200).json(activities);
    });
});

router.post("/activities/add", (req, res) => {
    const {
        activityName,
        activityPlace,
        activityTag,
        activityImage,
        activityDate,
        activityDescription,
    } = req.body;

    const newActivity = new Activities({
        activityName,
        activityPlace,
        activityTag,
        activityImage,
        activityDate,
        activityDescription,
    });

    newActivity.save().then((activity) =>
        res
            .status(200)
            .json({ activity, success: true, message: "Etkinlik başarıyla eklendi!" }))
        .catch((err) => console.log(err));
});

module.exports = router;