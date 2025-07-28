  const express=require("express");

  const router = express.Router();


  const { registeruser , loginuser, forgotpassword, verifyotp}=require('../controllers/auth/auth.controller');

  router.post('/register',registeruser);
  router.post('/login',loginuser);
   router.post('/forgot-password',forgotpassword);
   router.post('/verify',verifyotp);
  module.exports = router ;