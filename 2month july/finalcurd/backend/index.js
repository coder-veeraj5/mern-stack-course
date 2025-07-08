const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const connectionMongodb=require("./config/userdb");
const userrouter = require("./routes/userroutes");


const app=express();
const PORT=8000;
connectionMongodb()

app.use(cors());
app.use(bodyParser.json());

app.use('/api',userrouter);

app.listen(PORT ,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})
