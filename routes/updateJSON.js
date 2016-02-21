var playlist1 = require('../playlist1.json')
exports.view= function(req,res){
  console.log("start of update JSON");
  console.log(playlist1);
  
//  playlist1["currentlyPlaying"] = playlist1["nextPlaying"];
  if(playlist1["playlist1"].length != 0){
  	playlist1["currentlyPlaying"] = playlist1["playlist1"][0].videoID;
  	//playlist1["nextPlaying"] = playlist1["playlist1"][0].videoID;
  	playlist1["playlist1"] = playlist1["playlist1"].slice(1)
  	//console.log(playlist1["playlist1"]);
  }
  if(playlist1["playlist1"].length == 0){
     playlist1["empty"] = "No songs in this playlist!";
  }else{
      playlist1["empty"] = "";
  }
  console.log(playlist1);
  res.render('project', playlist1);
}