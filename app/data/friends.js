
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var friendsList = [];

// HTML : Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

// API : Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
res.json(friendsList);
});

// app.get("/api/clear", function(req, res) {
// 	friendsList = [];
// 	// alert("Clearing friends list... go find new friends you loner!");
// 	// res.sendFile(path.join(__dirname, "/api/friends"));
// });

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  console.log(newFriend);
    friendsList.push(newFriend);
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
