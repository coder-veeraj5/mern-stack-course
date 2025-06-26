// console.log("hello");
const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const connectMongoDb = require("./config/db");

const {
  createstudent,
  getAllstudent,
} = require("./controller/studentcontroller");

const app = express();

app.use(bodyParser.json());
//  app.use(express.urlencoded({extended :false})) // form

app.use(cors());

app.listen(3003, () => {
  console.log("hello node api");
});

//mongoose coonect
connectMongoDb();

app.post("/students", createstudent);

 app.get("/", (req, res) => {
   res.send("hello from node api veeraj patil 48 yash sahil harish");
});

app.get("/students", getAllstudent);


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
