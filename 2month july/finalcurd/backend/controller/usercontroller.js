
const User = require("../models/userschema"); // adjust path as needed

const createUser = async (req, res) => {
  try {
    const { name, email, mobileno, age } = req.body;

    const userData = await User({
      name,
      email,
      mobileno,
      age
    });

    await userData.save()
    res.status(201).json({data :userData,message :"created user"});
  } catch (error) {
    console.log(error);
  }
};

const getallUser = async (req, res) => {
  try {
  const alluserData= await User.find()
   res.status(201).json({data :alluserData,message :"get all user"});

  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req, res) => {
  try {
     const { userId }=req.body;
   const deleteuserData= await User.findByIdAndDelete(userId)
     res.status(201).json({data :deleteuserData,message :" user deleted"});
  } catch (error) {

   
    console.log(error);
  }
};
const updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};


module.exports={
    createUser,
    getallUser,
    deleteUser,
    updateUser,
}