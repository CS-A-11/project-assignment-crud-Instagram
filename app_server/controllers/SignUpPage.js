var request = require("request");
// var apiOptions = {
//   server: "http://localhost:3000"
// };
// if (process.env.NODE_ENV === "production") {
//   apiOptions.server = "https://loc8rdemo-2018.herokuapp.com";
// }

var mongoose = require("mongoose");
var User = mongoose.model("members");
var bcrypt=require('bcryptjs');

// var sendJSONresponse = function(res, status, content) {
//   res.status(status);
//   res.json(content);
// };
// var _showError = function(req, res, status) {
//     var title, content;
//     if (status === 404) {
//       title = "404, page not found";
//       content = "Oh dear. Looks like we can't find this page. Sorry.";
//     } else if (status === 500) {
//       title = "500, internal server error";
//       content = "How embarrassing. There's a problem with our server.";
//     } else {
//       title = status + ", something's gone wrong";
//       content = "Something, somewhere, has gone just a little bit wrong.";
//     }
//     res.status(status);
//     res.render("displayErrors", {
//       title: title,
//       content: content
//     });
//   };
 


module.exports.signUp=function(req,res){
    res.render('signUp');
}
module.exports.createAccount = function(req, res)
{   
    // res.render('signUp', { 
    // title:"SignUp"});
    var username=req.body.username;
    var password=req.body.password;
    var password2=req.body.password2;
    var profilePicture;
    
    console.log(username);
    console.log(password);
    console.log(req.file);
    
    if (req.file)
    {
        console.log('Uploading file..');
        profilePicture=req.file.filename;
    } 
    else
    {
        console.log('No file uploaded..');
        profilePicture="noImage.jpg";
    }
    req.checkBody('username','Username field is required').notEmpty();
    req.checkBody('password','Password field is required').notEmpty();
    req.checkBody('password2','Passwords do not match').equals(req.body.password);

    var errors=req.validationErrors();
    if(errors)
    {
        //console.log('Errors');
        res.render('signUp',
        {
            errors:errors
        });
    }
    else{
        // console.log('No errors');

        var newuser=new User();
        newuser.username=username;
        newuser.password=password;
        newuser.profilePicture=profilePicture;

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newuser.password, salt, function(err, hash) {
                newuser.password=hash;
                // Store hash in your password DB.

                newuser.save(function(err,savedUser){
                    if(err) throw err;
                    console.log(savedUser);
                        // return res.status(500).send();
                    //return res.status(200).send(savedUser);
                });
            });
        });
       

        req.flash('success', 'You are now successfully registered and can login!');
        res.location('/feed');
        res.redirect('/feed');
    }

   

    

};


