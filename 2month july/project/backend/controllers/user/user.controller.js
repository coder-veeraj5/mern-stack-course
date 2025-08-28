// 1. /api/user/birthday            ==> POST
// 2. /api/user/profile/:userId     ==> GET
// 3. /api/user/profile/:userId     ==> PUT
// 4. /api/user/profile/:userId     ==> DELETE

const User = require("../../models/user/user.model");

const getuserprofile=async(req ,res)=>{
    try {
        
        console.log(req.user.userId);

        const userdata=await User.findById(req.user.userId);
        
res.status(201).json({  message: " get User  successfully",userdata})
    } catch (error) {
        
    }
}

const updateuserprofile =async(req,res)=>{
try {
    
    const userid=req.user.userId;

const {fullName,userName,mobileNo}=req.body;

const update= await User.findByIdAndUpdate(userid,{
    fullName,userName,mobileNo
},
{
new :true,  //shows newly updated value on payload
})

res.status(200).json({message:"update succesfully",update});

} catch (error) {
    console.log(error);
    res.status(500).json({message:error.message});
}

}

const deleteuserprofile = async(req,res)=>{
try {
    
    const userid=req.user.userId;

const deleteprofile = await User.findByIdAndDelete(userid);

res.status(200).json({message:"delete succesfully"});
} catch (error) {
     console.log(error);
    res.status(500).json({message:error.message});
}

}

module.exports={
    getuserprofile,
    updateuserprofile,
    deleteuserprofile
}