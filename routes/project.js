var playlist1 = require('../playlist1.json');
exports.viewProject = function(req,res){
	var name = req.params.name;
	//console.log(playlist1);
  if(playlist1["playlist1"].length == 0){
     playlist1["empty"] = "No songs in this playlist!";
  }else{
      playlist1["empty"] = "";
  }

 


  /*var songName = req.query.songTitle;
  var artist = req.query.artist;
  var newSong = {
    "songName": songName,
    "artist": artist,
    "embedURL": "http://lorempixel.com/400/400/people"
  }
  playlist1["playlist1"].push(newSong);*/
  res.render('project', playlist1);
}

