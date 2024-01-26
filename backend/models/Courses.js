
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, default: "", unique: true},
    courseName: { type: String, default: "" },
    courseTag: { type: String, default: "" },
    courseDescription: { type: String, default: "" },
    courseImage: { type: String, default: "" },
    courseDate: { type: String, default: "" },
    coursePlace: { type: String, default: "" },
    courseLink: { type: String, default: "" },
    courseLevel: { type: String, default: "" },
    courseFacilities: { type: Array, default: [] },
    courseInstructors: { type: Array, default: [] },
    courseInstructorImgs: { type: Array, default: [] },
    lessons: { type: Array, default: [] },
});

const User = mongoose.model('Courses', userSchema);

module.exports = User;