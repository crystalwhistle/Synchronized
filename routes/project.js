var playlist1 = require('../playlist1.json');
var playlist = require('../newEventData.json');

exports.viewProject = function(req,res){
	var name = req.params.name;

  for ( var i=0; i<playlist.projects.length; i++ ) {
    if (playlist.projects[i].name == name) {
      var entry = playlist.projects[i];
      console.log(entry);
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
     entry["empty"] = "No more songs in this playlist!";
  }else{
      entry["empty"] = "";
  }

  res.render('project', entry);
}

