var md5 = require('md5');

var User = require('../models/user.model');

module.exports.login = function(rep, res){
    res.render('auth/login');
};

module.exports.postLogin = async function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var user = await User.findOne({ email: email });
    if(!user){
        res.render('auth/login', {
            errors: [
                'Email does not exist'
            ],
            values: req.body
        });
        return;
    }
    var hashedPassword = md5(password);
    if(user.password !== hashedPassword){
        res.render('auth/login', {
            errors: [
                'Wrong password'
            ],
            values: req.body
        })
        return;
    }
    res.cookie('userId', user.id, {
        signed: true
    });
    res.redirect('/users');
};