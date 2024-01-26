
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    admins: Array
});  

const User = mongoose.model('admins', userSchema);

module.exports = User;