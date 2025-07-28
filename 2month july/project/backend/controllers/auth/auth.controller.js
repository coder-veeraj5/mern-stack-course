// 1. /api/auth/register        ==> POST
// 2. /api/auth/login           ==> POST
// 3. /api/auth/forgot-password ==> POST
// 4. /api/auth/reset-password  ==> POST
// 5. /api/auth/change-password ==> POST

const User = require("../../models/user/user.model");
const bcrypt = require('bcrypt');
const { generateToken } = require("../../utils/jwttokens");

const registeruser= async(req,res)=>{
try {
   
  const  {userName,email,password}=req.body;

  const isexists=await User.findOne({email});
  if(isexists){
     return res.status(401).json({message :"user is already exists"});
  }

  const hashpass= await bcrypt.hash(password,10);

  const newUser=new User({userName,email,password :hashpass});

  await newUser.save();

res.status(201).json({ user: newUser, message: "User Registered successfully"})
  


} catch (error) {
    console.log(error);
    
}
}


const loginuser= async(req,res)=>{
try {
   
  const  {email,password}=req.body;

const userData=await User.findOne({email});

if(!userData){
  return res.status(401).json({message :"email or password is invalid"});
}

const isPasswordMatch= await bcrypt.compare(password,userData.password);
if(!isPasswordMatch){
  return res.status(401).json({message :"email or password is invalid"});
}

const token =generateToken(userData._id);
res.status(200).json({  message: "login successfully",token :token})
  
} catch (error) {
    console.log(error);
}



}



const forgotpassword=async(req,res)=>{
try {
  const {email}=req.body;

  const userData= await User.findOne({email});

  if(!userData){
   return res.status(401).json({message:"invalid email"});

  }
 
  const otp=Math.floor(1000+Math.random()*9000);
   const expiresAt = Date.now() + 10 * 60 * 1000;

   userData.resetotp=otp;
   userData.otpexpiration=expiresAt;

console.log("OTP:", otp);
console.log("ExpiresAt:", expiresAt);
console.log("Before Save:", userData);


   await userData.save();


res.status(200).json({message:"otp send",otp :otp});


} catch (error) {
  console.log(error);
  
}
}


const verifyotp=async(req,res)=>{
try {
  const {email,otp}=req.body;

  const verify= await User.findOne({email});

  if(!verify){
  return res.status(401).json({message :"email  invalid"});
}



  if(parseInt(otp) !==verify.resetotp){
  return res.status(401).json({message :"  invalid otp"});
}

if(verify.otpexpiration<Date.now()){
   return res.status(401).json({message :"   otp has expired"});
}

res.status(200).json({message:"otp verified sucessfully"})

} catch (error) {
  console.log(error);
  
}

}




module.exports={
     registeruser,loginuser,forgotpassword,verifyotp
    
}

