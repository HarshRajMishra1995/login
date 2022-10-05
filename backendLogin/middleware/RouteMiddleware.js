var jwt = require('jsonwebtoken');
const loginModel = require("../models/login")

module.exports.restrictTo = async(req, res, next) => {
  let token=req.headers.authorization
  var decoded = jwt.verify(token, 'secret');
  const existingUser = await loginModel.findOne({ email: decoded.data.email })
  if (existingUser) {
    next()
  } else {
    return res.json(404).send({message:"User is Not Authorized"})
  }
}