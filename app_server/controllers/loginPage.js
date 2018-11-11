var bcrypt=require('bcryptjs');
var mongoose = require("mongoose");
var User = mongoose.model("members");

module.exports.loginCredentials = function(req, res)
{   res.render('login', { 
    title:"editProfile"});
};

module.exports.loginCheck=function(req,res){
    req.flash('success','You are now logged in!')
    res.redirect('/feed');
};

