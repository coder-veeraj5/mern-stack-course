  const express=require("express");

  const router = express.Router();


  const { registeruser , loginuser, forgotpassword, verifyotp, resetpassword}=require('../controllers/auth/auth.controller');

  router.post('/register',registeruser);
  router.post('/login',loginuser);
   router.post('/forgot-password',forgotpassword);
   router.post('/verify',verifyotp);
     router.post('/resetpassword',resetpassword);
  module.exports = router ;