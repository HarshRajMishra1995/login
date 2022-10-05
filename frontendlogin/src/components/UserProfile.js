import React, { useState,useEffect } from "react";
import axios from "axios";

function UserProfile () {
  const userEmail = localStorage.getItem('User Email')

  const getUserProfile = async () => {
    await axios.get(`http://localhost:4000/api/v1/user/userProfile?email=${userEmail}`).then((res) => {
      console.log("User Profile is ---->",res)
    }).catch((err) => {
      console.log("Got Some Error In Getting User Profile",err)
    })
  }

  useEffect(() => {
    getUserProfile()
  },[])
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile