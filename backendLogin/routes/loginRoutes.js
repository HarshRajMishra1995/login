const express = require('express')
const router = express.Router()
const authController=require("../controllers/Auth")


router.post("/signUp", authController.signUp)
router.post("/", authController.login)




module.exports=router