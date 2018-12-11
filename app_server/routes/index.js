var express = require('express');
var multer=require('multer');
var path = require("path");
var mongoose = require("mongoose");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
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
var ctrlUploadPictures=require("../controllers/uploadPosts");
var ctrlLogin = require("../controllers/loginPage");
var ctrlSignUp = require("../controllers/SignUpPage");
var ctrlSearch= require("../controllers/search");
var ctrlEdit= require("../controllers/editProfile");

router.get("/profile", ctrlProfile.loadProfile);

//upload
router.get("/upload",ctrlUploadPictures.allUploads,ctrlUploadPictures.checkLogin);
router.post("/upload",upload.single('postPhoto'),ctrlUploadPictures.postCreate);
router.post("/uploadStory",upload.single('postStory'),ctrlUploadPictures.storyCreate);

//posts
router.get("/post/:postid", ctrlProfile.postReadOne,ctrlProfile.checkLogin);
router.get("/post/:postid/delete", ctrlProfile.postDeleteOne,ctrlProfile.checkLogin);
router.get("/post/:postid/edit", ctrlProfile.myEditPost,ctrlProfile.checkLogin);
router.post("/postEdit/:postid",ctrlProfile.postUpdate,ctrlProfile.checkLogin);
router.post("/postComment/:postid",ctrlProfile.commentUpdate,ctrlProfile.checkLogin);

//stories
router.get("/story/:storyid", ctrlProfile.storyReadOne,ctrlProfile.checkLogin);
router.get("/story/:storyid/delete", ctrlProfile.storyDeleteOne,ctrlProfile.checkLogin);

//other profiles /posts /stories /comments
router.get("/profile/:profileid",ctrlProfile.viewProfile,ctrlProfile.checkLogin);
router.get("/otherPost/:postid", ctrlProfile.postOtherView,ctrlProfile.checkLogin);
router.get("/otherStory/:storyid", ctrlProfile.storyReadOther,ctrlProfile.checkLogin);
router.post("/postCommentOther/:postid",ctrlProfile.commentUpdateOther,ctrlProfile.checkLogin);

//follow unfollow
router.post("/userFollow/:profileid",ctrlProfile.userFollow,ctrlProfile.checkLogin);
router.get("/userUnfollow/:profileid",ctrlProfile.deleteFollow,ctrlProfile.checkLogin);

router.get("/followers/:profileid",ctrlProfile.otherFollowers,ctrlProfile.checkLogin);
router.get("/following/:profileid",ctrlProfile.otherFollowing,ctrlProfile.checkLogin);

router.get("/feed", ctrlMain.loadFeed);


router.get("/edit", ctrlEdit.edit);
//router.post("edit",upload.single('profilePicture'),ctrlProfile.editThis)

//my own followers and following
router.get("/followers", ctrlProfile.followers,ctrlProfile.checkLogin);
router.get("/following", ctrlProfile.following,ctrlProfile.checkLogin);



router.get("/", ctrlLogin.loginCredentials);
router.post("/", ctrlLogin.doLogIn);
router.get("/logout", ctrlLogin.logout);


router.get("/signup",ctrlSignUp.signUp);
router.post("/signup", upload.single('profilePicture'),ctrlSignUp.createAccount);

router.get("/deleteForm", ctrlEdit.del);
router.delete("/deleteForm", ctrlEdit.deleteAccount);
router.delete("/deleteForm?_method=delete", ctrlEdit.deleteAccount);

router.put("/edit",upload.single('profilePicture'), ctrlEdit.updateProfile);
router.put("/edit?_method=put",upload.single('profilePicture'), ctrlEdit.updateProfile);

router.get("/searchMembers", ctrlSearch.autoComplete);
router.get("/checkUser", ctrlSignUp.validatigUserName);

module.exports = router;