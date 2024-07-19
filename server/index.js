const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
require("./db/config")
require("./db/histSchema")
require("./db/userSchema")
app.use("/",require("./routes/histRoute")) //gethistory
app.use("/auth",require("./routes/histRoute")) //getuserhistory
app.use("/auth/",require("./routes/auth"))
app.listen(5000,()=>{
    console.log("server running on 5000");
})
