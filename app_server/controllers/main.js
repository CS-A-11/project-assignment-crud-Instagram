var mongoose = require("mongoose");
var User = mongoose.model("User");
var photo = mongoose.model('photos');
var myStory = mongoose.model('stories');
var myStory1 = mongoose.model('stories');
var access;
var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

var myG = function (req, res, userd1) {
    // console.log("Finding location details", req.params);

    // console.log("Finding ID details", req.session);
    if (req.session && req.session.userId) {
        User.findById(req.session.userId).exec(function (err, location) {
            if (!location) {
                sendJSONresponse(res, 404, {
                    message: "locationid not found"
                });
                return;
            } else if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
                return;
            }
            console.log("myloc" + location);

            userd1 = location;
            console.log("inside is " + userd1);
            return location;
            // sendJSONresponse(res, 200, location);
        });

    } else {
        console.log("No locationid specified");
        sendJSONresponse(res, 404, {
            message: "No locationid in request"
        });
    }
    console.log("access outside" + userd1)
    //return userd1;
};




module.exports.checkLogin = function requiresLogin(req, res, next) {

    if (req.session && req.session.userId) {
        console.log("Session Active");
        console.log(req.session.userId);

        console.log(req.session.profilePic);

        // res.render('feed', {

        // });
        next();
    } else {
        console.log("No Session Active");
        var err = new Error("You must be logged in to view this page.");
        err.status = 401;
        res.redirect("/");
    }

};


module.exports.loadFeed = function requiresLogin(req, res, next) {

    if (req.session && req.session.userId) {
        console.log("Session Active");

        photo.find({ id: req.session.userId }, function (error, usera) {
            console.log(usera + "mmm")
            if (!usera) {
                console.log("error");

                return;
            } else if (error) {
                console.log("big eerr");
                return;
            }
            myStory.find({ id: req.session.userId }, function (error, userStory) {
                console.log(userStory + "musermm")
                if (!userStory) {
                    console.log("error");

                    return;
                } else if (error) {
                    console.log("big eerr");
                    return;
                }

                User.find({ _id: req.session.userId }, function (error, myUser) {
                    console.log(myUser + "MY USERmusermm")
                    if (!myUser) {
                        console.log("error");

                        return;
                    } else if (error) {
                        console.log("big eerr");
                        return;
                    }
                    var result=[];
                    let myResult3 = myUser.map(a => a.following);
                    // myResult3=myUser.following;
                    console.log("my cas" + myResult3);
                    var j;
                    for (j = 0; j < myResult3.length;j++) {
                    photo.find({ id: myResult3[j] }).exec(function (error, otherPosts) {
                        console.log("this is for photo log" + myResult3[j]);
                        console.log(otherPosts + "otherPOSTS")
                        if (!otherPosts) {
                            console.log("error");

                            return;
                        } else if (error) {
                            console.log("big eerr");
                            return;
                        }
                        result.push(otherPosts);
                        console.log("folow"+result +"followpost");
                    });
                }
             
                    
                    
                    var i;
                    for (i = 0; i < myResult3.length; i++) {
                     
                        myStory.find({ id: myResult3[i] }).exec(function (error, followStory) {
                            console.log("mksdscs" + myResult3[i]);
                            console.log(followStory + "museaumFOLLOW")
                            if (!followStory) {
                                console.log("error");

                                return;
                            } else if (error) {
                                console.log("big eerr");
                                return;
                            }

                            console.log("folow"+result +"followpost");
                            res.render('feed', {
                                currentUser: req.session.userName,
                                dp: [
                                    {
                                        nama: "/images/" + req.session.profilePic
                                    }

                                ],
                                allStory: followStory,
                                onlyMyStory: userStory,
                                allUploads: usera,
                                otherUploads:result
                                
                            });
                        //});
                    });
                    };
                });
            });
        });

        //  next();
    } else {
        console.log("No Session Active");
        var err = new Error("You must be logged in to view this page.");
        err.status = 401;
        res.redirect("/");
    }
};