// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survery.html"));
});

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