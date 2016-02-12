var playlist1 = require('../playlist1.json');
exports.viewProject = function(req,res){
	//var name = req.params.name;
	console.log(playlist1);
  var songName = req.query.songTitle;
  var artist = req.query.artist;
  var newSong = {
    "songName": songName,
    "artist": artist,
    "embedURL": "http://lorempixel.com/400/400/people"
  }
  playlist1["playlist1"].push(newSong);
  res.render('project', playlist1);
};

/*
exports.viewProject = function(req,res){
	var name = req.params.name;
	console.log("The project name is " + name)
	res.render('project', {
		'projectName': name
	});	
};*/