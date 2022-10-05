import React, { useState,useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Input, Button } from "antd";

function UserProfile () {
  const userEmail = localStorage.getItem('User Email')
  const token = localStorage.getItem("token")
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");


  const getUserProfile = async () => {
    await axios.get(`http://localhost:4000/api/v1/user/userProfile?email=${userEmail}`).then((res) => {
      setEmail(res.data.data.email)
      setUserName(res.data.data.name)
    }).catch((err) => {
      console.log("Got Some Error In Getting User Profile",err)
    })
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleNameChange = (e) => {
		setUserName(e.target.value);
  };

  	const handlePhoto = (e) => {
		setPhoto(e.target.value);
  };

  const handleUserEdit =async () => {
    await axios.patch(`http://localhost:4000/api/v1/user/editUserProfile?email=${userEmail}`, { name: userName, email :email,photo:photo},{ headers: { Authorization: token } }).then((res) => {
      getUserProfile()
    }).catch((err) => {
      console.log("Got Some Error In Getting User Profile",err)
    })
  }

  return (
    <>
    <div
				style={{
					display: "flex",
					justifyContent: "center",
				}}>
				<div
					style={{
						marginTop: "10%",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						gap: "5px",
						border: "1px solid lightblue",
						padding: "1%",
						borderRadius: "4px",
					}}>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<h3>UserProfile</h3>
					</div>
					<div>
						<img src="" alt="User Image " style={{width:"50px",height:"50px",border:"1px solid black"}} />
					</div>
					<div>
						<label htmlFor="">Email</label>
						<Input
							placeholder="Enter Email"
							name="email"
              value={email}
              disabled
							onChange={handleEmailChange}
						/>
					</div>
					<div>
						<label htmlFor="">Name</label>
						<Input
							placeholder="Enter Name"
							name="name"
							value={userName}
							onChange={handleNameChange}
						/>
					</div>
					<div>
						<label htmlFor="">Choose Photo</label>
						<Input
							type="file"
							id="avatar"
							name="photo"
              accept="image/png, image/jpeg"
							value={photo}
							onChange={handlePhoto}
						/>
					</div>
					<div>
						<Button type="primary" onClick={handleUserEdit}>
							Edit User
						</Button>
					</div>
				</div>
			</div>
    </>
  )
}

export default UserProfile