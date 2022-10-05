const express = require('express')
const router = express.Router()

const userController=require("../controllers/user")


router.get("/userProfile", userController.userProfile)

module.exports=router