 const express=require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectMongooseDb=require("./config/db");
const authRoute = require("./routes/auth.route");

const app=express();
app.use(cors());
app.use(bodyParser.json());

connectMongooseDb();
const PORT = 9090


app.use("/api/auth" , authRoute)


app.listen(PORT ,()=>{
        console.log(`Server is runing on http://localhost:${PORT}`)
})