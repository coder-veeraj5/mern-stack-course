  const express=require("express");
const { getuserprofile } = require("../controllers/user/user.controller");
const { verifyToken } = require("../utils/jwttokens");

  const router = express.Router();

    router.get('/getuserprofile',verifyToken,getuserprofile);

    module.exports = router ;