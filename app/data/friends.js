
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

var friendsList = [
	{
	  name: "morgan",
	  photo: "www.google.com",
	  preferences: [1, 2, 4, 3, 4, 5, 2, 1, 5, 3]
	},

	{
	  name: "callie",
	  photo: "www.google.com",
	  preferences: [1, 2, 5, 3, 4, 5, 1, 3, 5, 2]
	}
];

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

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
	var newFriend = req.body;
	var currentScores = 0;
	var newScore = 0;
	var send2Modal;

	// Calculating totals 
	for (var i = 0; i < friendsList.length; i++) {
		console.log(friendsList[i].preferences);

		for (var j = 0; j < friendsList[i].preferences.length; j++) {

        	currentScores = Math.abs(friendsList[i].preferences[j]);
        	newScore = Math.abs(newFriend.preferences[j]);
    	}
    	console.log(currentScores);
    	console.log(newScore);
    }

    if (newScore = currentScores ){

    }

    friendsList.push(newFriend);
    console.log(newFriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
