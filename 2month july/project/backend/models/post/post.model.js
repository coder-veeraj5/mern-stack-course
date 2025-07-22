const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    postImage : String,
    description : String,
    location : String,
    active : Boolean
})


const Post = mongoose.model("Post" , postSchema)


module.exports = Post