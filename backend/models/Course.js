
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, default: "", unique: true},
    lessonName: { type: String, default: "" },
    lessonDescription: { type: String, default: "" },
    lessonVideo: { type: String, default: "" }
});

const User = mongoose.model('Course', userSchema);

module.exports = User;