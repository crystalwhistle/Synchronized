var playlist1 = require('../playlist1.json')
exports.view= function(req,res){
  if(playlist1["playlist1"].length == 0){
     playlist1["empty"] = "No songs in this playlist!";
  }else{
      playlist1["empty"] = "";
  }
  playlist1["currentlyPlaying"] = playlist1["nextPlaying"];
  res.render('project', playlist1);
}