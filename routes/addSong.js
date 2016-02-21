var playlist1 = require('../playlist1.json');

exports.view = function(req, res){
  var addedNotification;
  var songName = req.query.songTitle;
  var artist = req.query.artist;
  var videoURL = req.query.videoURL;
  if(songName && artist && videoURL){
    var n = videoURL.indexOf("\?v\=");
    var videoID = videoURL.substring(n+3);
  	var newSong = {
    	"songName": songName,
    	"artist": artist,
    	"videoID": videoID
  	}
  	playlist1["playlist1"].push(newSong);
  	addedNotification = songName + " by " + artist + " was added!";
  }
  console.log(playlist1);
  res.render('addSong', {
  	'notification': addedNotification
  });
};