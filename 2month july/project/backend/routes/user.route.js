  const express=require("express");
const { getuserprofile, updateuserprofile, deleteuserprofile } = require("../controllers/user/user.controller");
const { verifyToken } = require("../utils/jwttokens");

  const router = express.Router();

    router.get('/getuserprofile',verifyToken,getuserprofile);

     router.put('/update_profile',verifyToken,updateuserprofile);

          router.delete('/delete_profile',verifyToken,deleteuserprofile);

    module.exports = router ;