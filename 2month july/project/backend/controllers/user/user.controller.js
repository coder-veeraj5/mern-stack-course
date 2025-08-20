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
module.exports={
    getuserprofile
}