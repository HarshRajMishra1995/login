import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Input, Button } from "antd";

function SignUp(props) {
	console.log(props);
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleNameChange = (e) => {
		setUserName(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const signUpHit = async () => {
		console.log("body data ", email, userName, password);
		await axios
			.post("http://localhost:4000/api/v1/login/signUp", {
				name: userName,
				email: email,
				password: password,
				photo: "",
			})
			.then((res) => {
				console.log("Login Response is ---->", res);
				navigate("/");
			})
			.catch((err) => {
				console.log("Error Occured during the Login --->", err);
			});
	};
	const handleSignUp = () => {
		signUpHit();
	};
	return (
		<>
			{" "}
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
						<h3>Lets Sign Up</h3>
					</div>
					<div>
						<label htmlFor="">Email</label>
						<Input
							placeholder="Enter Email"
							name="email"
							value={email}
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
						<label htmlFor="">Password</label>
						<Input
							placeholder="Enter Password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>
					<div>
						<Button type="primary" onClick={handleSignUp}>
							SignUp
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignUp;
