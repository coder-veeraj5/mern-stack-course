
const  mongoose  = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstname: String,
   lastname: String,
   address: String, 
  age: Number, 
  
  std: Number, 
});

// Create model for Student from schema
const Student = mongoose.model("Student", studentSchema);

module.exports =Student