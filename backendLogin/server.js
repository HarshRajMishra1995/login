const app = require("./app")

const server = app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on http://localhost:4000`);
});