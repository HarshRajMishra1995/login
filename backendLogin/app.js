const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
const allRoutes = require("./routes/index")
const cors = require("cors");
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api/v1",allRoutes)

module.exports = app;