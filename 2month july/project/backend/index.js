 const express=require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const connectMongooseDb=require("./config/db");
const authRoute = require("./routes/auth.route");
const postRoute=require("./routes/post.route");
// const userRoute=require("./routes/user.route");
const app=express();
app.use(cors());
app.use(bodyParser.json());

connectMongooseDb();
const PORT = 9090


app.use("/api/auth" , authRoute)
app.use("/api/post",postRoute)
// app.use("/api/user",userRoute)


app.listen(PORT ,()=>{
        console.log(`Server is runing on http://localhost:${PORT}`)
})