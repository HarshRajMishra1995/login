const mongoose = require("mongoose");
const dbUserName = process.env.MONGODBUSERNAME;
const dbPassword = process.env.MONGODBPASSWORD;
const dbName = process.env.MONGODBNAME;

const url = `mongodb+srv://${dbUserName}:${dbPassword}@mycluster.3zqi6et.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectionParams = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const connectDatabase = () => {
	new mongoose.connect(url, connectionParams)
		.then(() => {
			console.log("Connected to the database ");
		})
		.catch((err) => {
			console.error(`Error connecting to the database. n${err}`);
		});
};

module.exports = connectDatabase;
