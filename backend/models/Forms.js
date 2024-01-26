
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, default: "", unique: true},
    formAppliciants: { type: Array, default: [] },
});

const User = mongoose.model('Forms', userSchema);

module.exports = User;