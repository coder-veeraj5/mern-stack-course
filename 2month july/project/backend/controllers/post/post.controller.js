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

    const newpost=new Post({
        description,location,active,userId
    });

await newpost.save();

res.status(201).json({post:newpost ,message: "post created"})



} catch (error) {
    console.log(error);
    
}

}

const getAllPost = async (req, res) => {
  // Wrap the retrieval logic in a try-catch block for error handling
  try {
    // Fetch all posts from the database
    const allPostData = await Post.find();
console.log(allPostData);

    // Respond with a 201 status, a success message, and all post data
    res.status(201).json({
      message: "Get all Post Data",
      allPostData: allPostData,
    });

  // Handle any errors during post retrieval
  } catch (error) {
    // Log the error to the console
    console.log(error);
  }
};


module.exports={
    createpost,getAllPost
}