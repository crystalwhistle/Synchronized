var playlist1 = require('../playlist1.json');
var playlist = require('../newEventData.json');
exports.viewProject = function(req,res){
	var name = req.params.name;
	//console.log(playlist1);
  /*playlist1["name"] = name;
  if(playlist1["playlist1"].length == 0){
     playlist1["empty"] = "No songs in this playlist!";
  }else{
      playlist1["empty"] = "";
  }*/

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
  if(entry["playlist1"].length != 0 && !entry["currentlyPlaying"]){
    entry["currentlyPlaying"] = entry["playlist1"][0].videoID;
    //playlist1["nextPlaying"] = playlist1["playlist1"][0].videoID;
    entry["playlist1"] = entry["playlist1"].slice(1)
    //console.log(playlist1["playlist1"]);
  }
  if(entry["playlist1"].length == 0){
     entry["empty"] = "No songs in this playlist!";
  }else{
      entry["empty"] = "";
  }

 


  /*var songName = req.query.songTitle;
  var artist = req.query.artist;
  var newSong = {
    "songName": songName,
    "artist": artist,
    "embedURL": "http://lorempixel.com/400/400/people"
  }
  playlist1["playlist1"].push(newSong);*/
  //console.log(playlist1);
  res.render('project', entry);
}

