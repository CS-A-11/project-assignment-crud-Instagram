var express = require("express");
var router = express.Router();
var ctrlUserprofile = require("../controllers/signUp");

router.get("/:username", ctrlUserprofile.loginToProfile);
router.post("/signup", ctrlUserprofile.createProfile);
//router.get("/locations/:locationid", ctrlLocations.locationsReadOne);
router.put("/:username/edit", ctrlUserprofile.editProfile);
router.delete("/:username/edit", ctrlUserprofile.deleteProfile);

// reviews
// router.post("/locations/:locationid/reviews", ctrlReviews.reviewsCreate);
// router.get(
//   "/locations/:locationid/reviews/:reviewid",
//   ctrlReviews.reviewsReadOne
// );
// router.put(
//   "/locations/:locationid/reviews/:reviewid",
//   ctrlReviews.reviewsUpdateOne
// );
// router.delete(
//   "/locations/:locationid/reviews/:reviewid",
//   ctrlReviews.reviewsDeleteOne
// );

module.exports = router