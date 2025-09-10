// 1. /api/auth/register        ==> POST
// 2. /api/auth/login           ==> POST
// 3. /api/auth/forgot-password ==> POST
// 4. /api/auth/reset-password  ==> POST
// 5. /api/auth/change-password ==> POST

const User = require("../../models/user/user.model");
const bcrypt = require('bcrypt');
const { generateToken } = require("../../utils/jwttokens");
 const jwt=require("jsonwebtoken");
const nodemailer = require("nodemailer");

const transpoter= nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ronycolmen67@gmail.com",
    pass: "apvb pxhm agxp uesi",
  },
})



const registeruser= async(req,res)=>{
try {
   
  const  {userName,email,password,mobileNo}=req.body;

  const isexists=await User.findOne({email});
  if(isexists){
     return res.status(401).json({message :"user is already exists"});
  }

  const hashpass= await bcrypt.hash(password,10);

  const newUser=new User({userName,email,password :hashpass,mobileNo});

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
    console.log("Generated token:", token);

res.status(200).json({  message: "login successfully",token :token})
  
} catch (error) {
    console.log(error);
}



}



const forgotpassword=async(req,res)=>{
try {
  const {email}=req.body;

  const userData = await User.findOne({email});

  if(!userData){
   return res.status(404).json({message:"invalid email"});

  }
 
  const otp=Math.floor(1000+Math.random()*9000);
   const expiresAt = Date.now() + 10 * 60 * 1000;

   userData.resetotp=otp;
   userData.otpexpiration=expiresAt;

// console.log("OTP:",  userData.resetotp);
// console.log("ExpiresAt:",  userData.otpexpiration );
// console.log("Before Save:", userData);


   await userData.save();

    const mailOptions = {
      from: "ronycolmen67@gmail.com",
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}. It will expire in 10 minutes.`,
    };

    await transpoter.sendMail(mailOptions);
res.status(200).json({message:"otp send",otp :otp});


} catch (error) {
 
  
res.status(200).json({ message:error.message});
}
}


const verifyotp=async(req,res)=>{
try {
  const {email,otp}=req.body;

  const verify= await User.findOne({email});

  if(!verify){
  return res.status(401).json({message :"email  invalid"});
}

// console.log(verify,"verify");


  if(parseInt(otp) !==verify.resetotp){
  return res.status(401).json({message :"  invalid otp"});
}

if(verify.otpexpiration<Date.now()){
   return res.status(401).json({message :"   otp has expired"}); //doubt
}

const token=generateToken(verify._id);

res.status(200).json({message:"otp verified sucessfully", token:token})

} catch (error) {
  
res.status(200).json({ message:error.message});
}

}


const resetpassword=async(req,res)=>
  {
try {
 const {token, newpassword}=req.body;

let decode;
try {
     decode =jwt.verify(token, process.env.JWT_SECRET);
} catch (error) {
    
 return res.status(404).json({ messsage : "token is not valid" ,error:error.message});
}
console.log(decode,"decode");
const userData=await User.findById(decode.userId);
console.log(userData,"id");
  if(!userData){
   return res.status(404).json({message:" user not found"});

  }


const hashpass = await bcrypt.hash(newpassword, 10);
    userData.password = hashpass;

  await userData.save();
console.log(userData,"id");

 return res.status(200).json({message:"paassword change"});
} catch (error) {
console.log(error);

}
}




module.exports={

     registeruser,loginuser,forgotpassword,verifyotp,resetpassword
    
}

