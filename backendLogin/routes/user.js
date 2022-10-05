const express = require('express')
const router = express.Router()
const middleware=require("../middleware/RouteMiddleware")
const userController=require("../controllers/user")


router.get("/userProfile", userController.userProfile)
router.patch("/editUserProfile",middleware.restrictTo, userController.editUserProfile)

module.exports=router