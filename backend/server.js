const dotenv = require("dotenv").config()
const app = require("./src/app")
const connecttodb = require("./src/config/databse")
connecttodb()
app.listen(3000,()=>{
    console.log("server is running on port 3000 :)")
})