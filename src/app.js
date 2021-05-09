const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const config = require("./config/config");

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/", require("./app/routes/index.route"));

module.exports = app;
