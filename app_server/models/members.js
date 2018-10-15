var mongoose = require('mongoose');



var photos = new mongoose.Schema({
    pid:{ type: Number, required: true },
    userId: { type: Number, required: true },
    caption: String,
    photoPath: String,
    photo_size: Number,         //size of image on server
    uploadingDate: Date,
    tags: [String]
})



var userRouter=new mongoose.Schema({
    userId:{ type: Number, required: true },
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    creationDate: Date,
    bio: String,
    noOfPosts: { type: Number, "default":0 },
    noofFollowers: { type: Number, "default":0 },
    noOfUsersFollowing: { type: Number, "default":0 },
    posts: [photos],
    followedBy: [Number],
     followingUsers: [Number]

})



mongoose.model('members', userRouter);
