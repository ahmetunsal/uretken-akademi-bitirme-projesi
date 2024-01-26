
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, default: "", unique: true},
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    message: { type: String, default: "" },
});

const User = mongoose.model('Contact', userSchema);

module.exports = User;