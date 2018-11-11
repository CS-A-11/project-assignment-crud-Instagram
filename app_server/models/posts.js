var mongoose = require('mongoose');

var comments = new mongoose.Schema({
    commentId: { type: Number, required: true },
    username: {type: String,required:true},
    comment: String,
    likesOnComment: Number
})



var responseOnPosts = new mongoose.Schema({
    userName: {type: String,required:true},
    pid: { type: Number, required: true },
    noOfLikes:{ type: Number, "default":0 },
    likedBy: [String],           //array of usernames
    commentBy: [comments]
})


mongoose.model('posts', responseOnPosts);