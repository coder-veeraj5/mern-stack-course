// 1. /api/auth/register        ==> POST
// 2. /api/auth/login           ==> POST
// 3. /api/auth/forgot-password ==> POST
// 4. /api/auth/reset-password  ==> POST
// 5. /api/auth/change-password ==> POST

const User = require("../../models/user/user.model");

const registeruser= async(req,res)=>{
try {
   
  const  {userName,email,password}=req.body;

  const newUser=await User({userName,email,password});

  await newUser.save();

res.status(201).json({ user: newUser, message: "User Registered successfully"})
  


} catch (error) {
    console.log(error);
    
}
}

module.exports={
     registeruser
    
}

