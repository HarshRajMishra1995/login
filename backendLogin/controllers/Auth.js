const bcrypt = require('bcrypt');
const loginModel = require("../models/login")
const saltRounds = 10;


module.exports.signUp = async (req, res) => {
  const hasedPassword = "";
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
        // Store hash in your password DB.
      hasedPassword=hash
    });
  });
  console.log("hased password is ",hasedPassword)
  const data = await loginModel.create({email,name,password:hasedPassword,photo})
  if (data) {
    res.status(200).json({message:"User Signed Up Successfully",data})
  } else {
    res.status(400).json({message:"There is an error while User Sign Up"})
  }
}


module.exports.login = async(req, res) => {

  console.log(req.body)
  const data = await loginModel.create(req.body)
  if (data) {
    res.status(200).json({message:"user is logged in"})
  } else {
    res.status(400).json({message:"user is not logged in"})
  }

}