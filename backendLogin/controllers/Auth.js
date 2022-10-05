var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const loginModel = require("../models/login");
const saltRounds = 10;

module.exports.signUp = async (req, res) => {
  const { email, password, name, photo } = req.body;
  console.log(req.body)
  const data = await loginModel.findOne({ email: email })
  if (data) {
    res.status(400).json({ message: `User Already Exists with the email ${email}` })
  } else {
    bcrypt.genSalt(saltRounds, async function (err, salt) {
      bcrypt.hash(req.body.password, salt, async function (err, hash) {
        const data = await loginModel.create({ email, name, password: hash, photo })
        if (data) {
          res.status(200).json({ message: "User Signed Up Successfully", data })
        } else {
          res.status(400).json({ message: "There is an error while User Sign Up" })
        }
      })
    })
  }
};

module.exports.login = async (req, res) => {

  const data = await loginModel.findOne({ email: req.body.email })
  const tokenData= jwt.sign({
  data:data
    }, 'secret', { expiresIn: '1h' });

  const userDetails = {};
 bcrypt.compare(req.body.password, data.password, function(err, result) {

   if (result) {
     userDetails.email = data.email
     userDetails.name = data.name
     userDetails.token = tokenData
     res.status(200).json({ message: "Login Successfull", data:userDetails  })
   } else {
     res.status(400).json({message:"Login UnSuccessfull"})
   }
 });
};
