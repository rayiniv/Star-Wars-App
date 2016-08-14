var moviesJSON = require('../movies.json');

//Home Route
exports.home = function(req, res) {

	var movies = moviesJSON.movies;

	res.render('home', {
		title : "Star Wars Movies",
		movies : movies
	});
};

//Single Movie
exports.movie_single = function(req, res) {
	var episodeNum = req.params.episode_number;
	res.send("This is the page for episode " + episodeNum);
};

//Invalid Route
exports.notFound = function(req, res) {
	res.send("This page does not exist");
};