// 1. /api/posts/create         ==> POST
// 2. /api/posts/delete         ==> DELETE
// 3. /api/posts/edit           ==> PUT
// 4. /api/posts/feed           ==> GET
// 5. /api/posts/:userId        ==> GET

const Post = require("../../models/post/post.model");

const createpost=async(req,res)=>{
try {

    
    const {description,location,active}=req.body;
    const userId=req.user.id;

    const newpost=new Post({userId,description,location,active});

await newpost.save();

res.status(201).json({post:newpost ,message: "post created"})



} catch (error) {
    console.log(error);
    
}


}

module.exports={
    createpost
}