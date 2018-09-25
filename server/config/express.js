var path = require("path"),
  express = require("express"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  config = require("./config"),
  listingsRouter = require("../routes/listings.server.routes");

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan("dev"));

  //body parsing middleware
  app.use(bodyParser.json());

  //serve static files
  app.use(express.static("client"));

  //API routing
  app.use("/api/listings", listingsRouter);

  //serve index to all other routes
  app.get("/", (req, res) => {
    res.render("/client/index.html");
  });

  return app;
};
