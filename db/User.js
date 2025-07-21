const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('users', userSchema); // users name will match with database collection name