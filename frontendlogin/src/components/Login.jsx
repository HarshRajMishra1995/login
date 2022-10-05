import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "antd/dist/antd.css";
import { Input, Button } from "antd";

function Login(props) {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const loginHit = async () => {
		await axios
			.post("http://localhost:4000/api/v1/login", {
				email: email,
				password: password,
			})
			.then((res) => {
				localStorage.setItem("User Email", res.data.data.email);
				localStorage.setItem("User Name", res.data.data.name);
				localStorage.setItem("token", res.data.data.token);
				navigate(`/UserProfile`);
			})
			.catch((err) => {
				console.log("Error Occured during the Login --->", err);
			});
	};
	const handleLogin = () => {
		loginHit();
	};

	const handleSignUpLink = () => {
		navigate("/SignUp");
	};

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
						<h3>Lets Login</h3>
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
						<label htmlFor="">Password</label>
						<Input
							placeholder="Enter Password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>
					<div>
						<Button type="primary" onClick={handleLogin}>
							Login
						</Button>
						<a style={{ marginLeft: "1%" }} onClick={handleSignUpLink}>
							Sign Up
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
