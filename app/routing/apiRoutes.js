// // Basic route that sends the user first to the AJAX Page
// app.get("/api/friends", function(req, res) {
//   res.json(friendsList);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/friends", function(req, res) {
//   var newFriend = req.body;
//   console.log(newFriend);
//     friendsList.push(newFriend);
//   res.sendFile(path.join(__dirname, "/../public/home.html"));
// });

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });