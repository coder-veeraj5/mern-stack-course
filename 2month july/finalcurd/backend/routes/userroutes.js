const express=require("express");

const {
  getallUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/usercontroller"); 
const router= express.Router();

router.get("/get-all-user",getallUser);
router.post("/create-user",createUser);
router.put("/update-user",updateUser);
router.delete("/delete-user",deleteUser);

module.exports=router;