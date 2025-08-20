  const express=require("express");
const { verifyToken } = require("../utils/jwttokens");
const { createpost, getAllPost } = require("../controllers/post/post.controller");

  const router = express.Router();



  router.post('/create',verifyToken,createpost);
  router.get('/getallpost',getAllPost);

  module.exports = router ;