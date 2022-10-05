const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		email: { type: String },
		name: { type: String },
		password: { type: String },
		phote: { type: String },
	},
	{ timestamps: true }
);

module.exports = new mongoose.model("loginUser", UserSchema);
