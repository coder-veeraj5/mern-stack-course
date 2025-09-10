  const express=require("express");
const { verifyToken } = require("../utils/jwttokens");
const { createpost, getAllPost, getmypost, updatePost, deletePost } = require("../controllers/post/post.controller");

  const router = express.Router();



  router.post('/create',verifyToken,createpost);
  router.get('/getallpost',getAllPost);
  router.delete('/deletePost',verifyToken,deletePost)
router.get('/getmypost',verifyToken,getmypost);
router.put('/updatePost',verifyToken,updatePost);
  module.exports = router ;