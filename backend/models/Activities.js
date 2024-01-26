
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, default: "", unique: true},
    activityName: { type: String, default: "" },
    activityPlace: { type: String, default: "" },
    activityTag: { type: String, default: "" },
    activityImage: { type: String, default: "" },
    activityDate: { type: Date, default: Date.now() },
    activityDescription: { type: String, default: "" },
    activityURL: { type: String, default: "" }, 
});

const User = mongoose.model('Activities', userSchema);

module.exports = User;