const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
require("./db/config")
require("./db/histSchema")
app.use("/",require("./routes/histRoute"))
app.listen(5000,()=>{
    console.log("server running on 5000");
})
