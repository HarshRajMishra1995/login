const app = require("./app")
const port=process.env.PORT||4000

const connectDatabase = require("./config/database");

// // //connecting to Database
connectDatabase();



const server = app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost:${port}`);
});