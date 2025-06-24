// console.log("hello");
const express = require("express");

const bodyParser = require("body-parser");
const mongooseconnect = require("./config/db");

const app = express();

app.use(bodyParser.json());
//  app.use(express.urlencoded({extended :false})) // form

app.listen(3003, () => {
  console.log("hello node api");
});

//mongoose coonect
mongooseconnect()

const studentSchema = new mongoose.Schema({
  name: String, // Student's full name
  age: Number, // Student's age
  email: String, // Student's email address
  course: String, // Course the student is enrolled in
  admissionDate: String, // Date of admission
});

// Create model for Student from schema
const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
  try {
    const { name, age, email, course, admissionDate } = req.body;
    const student = new Student({
      name,
      age,
      email,
      course,
      admissionDate,
    }); // Create new student from request body
    await student.save(); // Save to database
    res.status(201).json(student); // Return created student
  } catch (err) {
    res.status(400).json({ error: err.message }); // Return error if creation fails
  }
});

app.get("/", (req, res) => {
  res.send("hello from node api veeraj patil 48 yash");
});

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ maessage: err.message });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ maessage: err.message });
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); // Find and update
    if (!student) return res.status(404).json({ error: "Student not found" }); // If not found
    res.json(student); // Return updated student
  } catch (err) {
    res.status(400).json({ error: err.message }); // Return error
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id); // Find and delete

    if (!student) return res.status(404).json({ error: "Student not found" }); // If not found

    res.json({ message: "Student deleted successfully" }); // Confirm deletion
  } catch (err) {
    res.status(500).json({ error: err.message }); // Return error
  }
});
