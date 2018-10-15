var express = require('express');
var router = express.Router();

var ctrlMain = require("../controllers/main");
var ctrlProfile = require("../controllers/profile");
var ctrlDM = require("../controllers/DMPage");
// var ctrlStart = require("../controllers/start");//login signup

/* GET home page. */
router.get("/", ctrlMain.index);
router.get("/profile", ctrlProfile.profilePage);
router.get("/direct-message", ctrlDM.directMessage);
// router.get("/start", ctrlStart.startPage);//login signup

module.exports = router;
