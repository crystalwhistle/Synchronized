var playlist1 = require('../playlist1.json');
var playlist = require('../newEventData.json');

exports.view = function(req, res){
  var addedNotification;
  var name = req.params.name;
  var songName = req.query.songTitle;
  var artist = req.query.artist;
  var videoURL = req.query.videoURL;
  if(songName && artist && videoURL && name){
    var n = videoURL.indexOf("\?v\=");
    var videoID = videoURL.substring(n+3);
  	var newSong = {
    	"songName": songName,
    	"artist": artist,
    	"videoID": videoID
  	}

    for ( var i=0; i<playlist.projects.length; i++ ) {
    if (playlist.projects[i].name == name) {
      var entry = playlist.projects[i];
      console.log(entry);
      /*if(entry["playlist1"].length == 0){
        entry["empty"] = "No songs in this playlist!";
      }else{
        entry["empty"] = "";
      }   
*/
      break;
    }
  }
  	entry["playlist1"].push(newSong);
  	addedNotification = songName + " by " + artist + " was added!";
  }
  //console.log(playlist1);
  res.render('addSong', {
  	'notification': addedNotification,
    'name' : name
  });
};