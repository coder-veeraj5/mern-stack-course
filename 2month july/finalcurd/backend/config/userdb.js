const mongoose=require("mongoose");

const connectionMongodb= async()=>{
    try {
        
 const connection=await mongoose.connect("mongodb://localhost:27017/userdatabase");

    if (connection) {
      console.log("Connected DB...");
    }

    } catch (error) {
        console.log(error);
        
    }
}

module.exports=connectionMongodb;