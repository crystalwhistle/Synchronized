var data = require("../newEventData.json");

exports.view = function(req, res){

	var name = req.params.name;

	var nameUpdate = req.query.name;
	var date = req.query.date;
	var image = req.query.image;

	for ( var i=0; i<data.projects.length; i++ ) {
		console.log("test");
		console.log(data.projects[i]);
		console.log(data.projects[i].name);
    if (data.projects[i].name == name) {
      var entry = data.projects[i];

      if (nameUpdate != "") {
      	data.projects[i].name = nameUpdate;
      }
      if (date != "") {
      	data.projects[i].date = date;
      }
      if (image != "" && data.projects[i].image == "") {
      	data.projects[i].image = image;
      }

      break;
    }
  }

	res.redirect('index');
}