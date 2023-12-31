const http = require('http');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB } = require("./src/db/dbConnection");
const routes = require("./src/routes/v1");
require("./src/helpers/crons");
const config = require("./src/config/config");
const path = require("path")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());

/**img */
app.use(express.static(path.join(__dirname, `./public`)));

/** Routes with Namespace (/v1) */
app.use("/v1", routes);

app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** create server using http */
const server = http.createServer(app);

/** Database connection */
connectDB();

server.listen(config.port, () => {
  console.log("server listning port number 3000!");
});