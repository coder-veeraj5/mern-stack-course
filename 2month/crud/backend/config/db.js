
const  mongoose  = require("mongoose");

   const mongooseconnect = async() => { 

   try {
   const connection =  await mongoose.connect("mongodb://localhost:27017/")
   if (connection===true) {
     console.log("mongoose connected")
   }
    
   } catch (error) {
    console.log(error);
    
    
   }

   };
   module.exports =mongooseconnect