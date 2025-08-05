const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    // postImage : String,
    // description : String,
    // location : String,
    // active : 
    
    userId:{
type:mongoose.Schema.ObjectId,
ref:"User",
required:true,
    },


     description :{
type:String,
required:true,
     } ,
      location :{
type:String,
required:true,
     } ,
      active :{
type:Boolean,
default:true,
     } ,
      createdAt :{
type:Date,
default:Date.now,
     } ,
});


const Post = mongoose.model("Post" , postSchema)


module.exports = Post;