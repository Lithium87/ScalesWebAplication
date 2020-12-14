const fs = require("fs");
const express = require("express");
const sqlite3 = require("sqlite3");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { openConnection, closeConnection } = require("./utils/db");

require("dotenv").config();

const app = express();

openConnection();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

fs.readdirSync("./routes").map((route) => {
  app.use("/api", require("./routes/" + route));
});

closeConnection();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
