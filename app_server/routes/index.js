var express = require('express');
var multer=require('multer');
var path = require("path");
var mongoose = require("mongoose");
var User = mongoose.model("members");
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var bcrypt=require('bcryptjs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({ storage: storage });


var router = express.Router();
var db=require("../models/db");


var ctrlMain = require("../controllers/main");
var ctrlProfile = require("../controllers/profile");
var ctrlDM = require("../controllers/DMPage");
var ctrlLogin = require("../controllers/loginPage");
var ctrlSignUp = require("../controllers/SignUpPage");

router.get("/feed", ctrlMain.index);
router.get("/profile", ctrlProfile.profilePage);
router.get("/direct-message", ctrlDM.directMessage);


router.get("/", ctrlLogin.loginCredentials);
router.post("/",passport.authenticate('local',{
  failureRedirect:'/',
  successRedirect: '/feed',
failureFlash:'Invalid username or password!'}), ctrlLogin.loginCheck);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(function(username,password,done)
{
  User.getUserByUsername(username,function(err,user){
    if(err) throw err;
    if(!user){
      return done(null,false,{message:'Unknown user!'});
    }
    User.comparePassword(password,user.password,function(err,isMatch){
      if(err) return err;
      if(isMatch){
        return done(null,user);
      }
      else{
        return done(null,false,{message:'Invalid password!'});
      }
    });
  });
}));


router.get("/signup",ctrlSignUp.signUp);
router.post("/signup", upload.single('profilePicture'),ctrlSignUp.createAccount);

module.exports = router;
