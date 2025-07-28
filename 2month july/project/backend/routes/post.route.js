  const express=require("express");
const { verifyToken } = require("../utils/jwttokens");
const { createpost } = require("../controllers/post/post.controller");

  const router = express.Router();



  router.post('/create',verifyToken,createpost);


  module.exports = router ;