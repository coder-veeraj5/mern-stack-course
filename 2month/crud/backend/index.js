// console.log("hello");
 const express =require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
 const app =express();

 app.use(bodyParser.json());


 
 app.listen(3003,()=>{
    console.log("hello node api");
 });



 

 mongoose.connect("mongodb://localhost:27017/")
 .try(()=>{
console.log("mongoose connected")
 })
 .catch(()=>{
    console.log("mongoose  not connected")
 })


 const studentSchema = new mongoose.Schema({
  name: String,           // Student's full name
  age: Number,            // Student's age
  email: String,          // Student's email address
  course: String,         // Course the student is enrolled in
  admissionDate: String,    // Date of admission
});

// Create model for Student from schema
const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body); // Create new student from request body
    await student.save(); // Save to database
    res.status(201).json(student); // Return created student
  } catch (err) {
    res.status(400).json({ error: err.message }); // Return error if creation fails
  }
});

  app.get('/' ,(req,res)=>{
    res.send("hello from node api veeraj patil 48 yash")
 });