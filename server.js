const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const MongoDBConnection = require("./src/config/database");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

// user routes
app.use("/api", require("./src/routes/userRoutes"));

// database connection
MongoDBConnection();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running port http://localhost:${port}`);
});
