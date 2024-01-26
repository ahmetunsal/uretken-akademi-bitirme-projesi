
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    email: String,
    password: String,
    displayName: String,
    isAdmin: { type: Boolean, default: false, visible: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;