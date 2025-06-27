const Student = require("../models/studentschema");
 
 const createstudent=async(req,res)=>{
  try {
    const {firstname,lastname, address, age, std } = req.body;
    const studentdata = new Student({
      firstname,
      lastname,
      address,
      age,
      std
    }); // Create new student from request body
    await studentdata.save(); // Save to database
    res.status(201).json(studentdata); // Return created student
  } catch (error) {
    res.status(400).json({ message: error.message }); // Return error if creation fails
  }
 }

  const getAllstudent=async(req,res)=>{
      try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ maessage: err.message });
  }
 }
 module.exports={createstudent ,getAllstudent}