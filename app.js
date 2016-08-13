var express = require('express');

var app = express();

app.set('view engine', 'ejs');

//Routes

//Home Route
app.get('/', function(req, res) {
	res.render('home', {
		title : "Star Wars Movies"
	});
});

//Single Movie
app.get('/star_wars_episode/:episode_num?', function(req, res) {
	var episodeNum = req.params.episode_num;
	res.send("This is the page for episode " + episodeNum);
});

//Invalid Route
app.get('*', function(req, res) {
	res.send("This page does not exist");
});

app.listen(3000, function() {
	console.log("Server is running!!");
});