var playlist1 = require('../playlist1.json');

exports.view = function(req, res){
  console.log("infunction");
  var addedNotification;
  var songName = req.query.songTitle;
  var artist = req.query.artist;
  if(songName && artist){
  	var newSong = {
    	"songName": songName,
    	"artist": artist,
    	"embedURL": "http://lorempixel.com/400/400/people"
  	}
  	playlist1["playlist1"].push(newSong);
  	addedNotification = songName + " by " + artist + " was added!";
  }
  res.render('addSong', {
  	'notification': addedNotification
  });
};