const express = require('express')
const router = express.Router()

const authController=require("../controllers/Auth")


router.get("/", authController.login)




module.exports=router