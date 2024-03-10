const express = require("express")
const mongoose=require("mongoose") 
const cors=require("cors")

const dburl="mongodb://localhost:27017/dmsproject"
mongoose.connect(dburl).then(() => {
    console.log("Connected to Db successfully")
    
}).catch((err) => {
    console.log(err.message)
});

const app = express()
app.use(express.json())
app.use(cors())

const adminrouter=require("./routes/adminroutes")
const donarrouter=require("./routes/donarroutes")


app.use("",adminrouter)  
app.use("",donarrouter) 



const port= 3149
app.listen(port,()=>{
    console.log(`Server is running at Port ${port}`)
})