const loginModel = require("../models/login")


module.exports.userProfile = async (req, res) => {
  const {email}=req.query
  const userProfileData = await loginModel.findOne({ email })
  if (userProfileData) {
    const { email, name, photo } = userProfileData
    const profileData = {};
    profileData.name = name;
    profileData.email = email;
    profileData.photo = photo;
    res.status(200).json({message:"User Profile",data:profileData})
  } else {
    res.status(400).json({message:"Error in getting user profile"})
  }
}