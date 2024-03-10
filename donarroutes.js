const donarcontroller = require("../controllers/donarcontroller")

const express = require("express")
const donarrouter = express.Router()


donarrouter.post("/insertdonar",donarcontroller.insertdonar)
donarrouter.post("/checkdonarlogin",donarcontroller.checkdonarlogin)


module.exports = donarrouter