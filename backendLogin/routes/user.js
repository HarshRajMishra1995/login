const express = require('express')
const router = express.Router()
const middleware=require("../middleware/RouteMiddleware")  //Custom middleware for restricting user
const userController=require("../controllers/user")


router.get("/userProfile", userController.userProfile)
router.patch("/editUserProfile",middleware.restrictTo, userController.editUserProfile)  //Middleware for user

module.exports=router