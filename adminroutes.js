const admincontroller=require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()


adminrouter.get("/viewdonars",admincontroller.viewdonars)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.delete("/deletedonar/:email",admincontroller.deletedonar)

module.exports = adminrouter