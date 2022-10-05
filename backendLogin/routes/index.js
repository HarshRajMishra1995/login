const express = require('express')
const router=express.Router()

const loginRoutes = require("./loginRoutes")

const userRoutes=require("./user")

router.use("/login", loginRoutes)
router.use("/user",userRoutes)

module.exports=router
