
var comments = new mongoose.Schema({
    commentId: { type: Number, required: true },
    userName: String,
    comment: String,
    likesOnComment: Number
})

var photos = new mongoose.Schema({
    pid:{ type: Number, required: true },
    userId: { type: Number, required: true },
    caption: String,
    photoPath: String,
    photo_size: Number,         //size of image on server
    uploadingDate: Date,
    tags: [String]
})


var responseOnPosts = new mongoose.Schema({
    userId:{ type: Number, required: true },
    pid: { type: Number, required: true },
    noOfLikes:{ type: Number, "default":0 },
    likedBy: [String],           //array of usernames
    commentBy: [comments]
})


mongoose.model('posts', responseOnPosts);