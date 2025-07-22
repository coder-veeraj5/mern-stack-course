 const mongoose=require("mongoose");


 const connectMongooseDb=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/instagram-db");

console.log("connect mongodb");
    } catch (error) {
        console.log(error);
        
    }
 }

module.exports=connectMongooseDb;