// 1. /api/posts/create         ==> POST
// 2. /api/posts/delete         ==> DELETE
// 3. /api/posts/edit           ==> PUT
// 4. /api/posts/feed           ==> GET
// 5. /api/posts/:userId        ==> GET

const Post = require("../../models/post/post.model");

const createpost=async(req,res)=>{
try {


    const {description,location,active}=req.body;
    const userId=req.user.userId;

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

const updatePost = async (req, res) => {
  try {
    const { postId, description, location, active } = req.body;

    const updatepost = await Post.findByIdAndUpdate(
      postId,
      {
        description,
        location,
        active,
      },
      {
        new: true,
      }
    );
console.log(updatepost,"updatedpost");

    res.status(201).json({
      message: "Post Updated",
      userData: updatepost,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

const getmypost = async (req, res) => {
  try {

    console.log("hii this is mypost");
    
    
    const userId = req.user.userId;
    const PostsData = await Post.find({ userId });

    console.log(PostsData,"postdata");
    
    res.status(200).json({
      message: "Get All My Post",
      mypostdata: PostsData,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    // const userId = req.user.userId;
// const postId = req.param.id
// console.log(postId,'idddd');
    const { postId } = req.body;

   await Post.findByIdAndDelete(postId);


    res.status(201).json({ message: "Deleted Post" });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

module.exports={
    createpost,getAllPost,
getmypost,updatePost,deletePost
}