const express = require("express");
const app = express();
const logRegRoute = require("./routes/regLogRoutes.js");
const articleRoute = require("./routes/articleRoute.js");
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { mongooseConnection } = require("./rootController/rootControls");

mongooseConnection;
app.use(logRegRoute);
app.use(articleRoute);
/////////////////////////////////////////////

module.exports = app;
