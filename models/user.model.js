var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    avatar: String
});

var User =  mongoose.model('User', userSchema, 'users');

module.exports = User;
