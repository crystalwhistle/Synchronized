var playlist = require('../newEventData.json');
exports.view= function(req,res){
  var name = req.params.name;
  console.log("name of playlist to update is " + name);

  for ( var i=0; i<playlist.projects.length; i++ ) {
    if (playlist.projects[i].name == name) {
      var entry = playlist.projects[i];
      console.log(entry);
      break;
    }
  }
  console.log(entry);
  if(entry["playlist1"].length != 0){
  	entry["currentlyPlaying"] = entry["playlist1"][0].videoID;
  	entry["playlist1"] = entry["playlist1"].slice(1)
  }
  if(entry["playlist1"].length == 0){
     entry["empty"] = "No songs in this playlist!";
  }else{
      entry["empty"] = "";
  }

  res.render('project', entry);
}