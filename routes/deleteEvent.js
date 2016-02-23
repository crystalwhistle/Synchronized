var data = require("../newEventData.json");

exports.view = function(req, res){
	var name = req.params.name;
	console.log("The project name is " + name)
	
	for ( var i=0; i<data.projects.length; i++ ) {
		console.log("test");
		console.log(data.projects[i]);
		console.log(data.projects[i].name);
    if (data.projects[i].name == name) {
      var entry = data.projects[i];

      data.projects.splice(i, 1);

      break;
    }
  }

	res.redirect('/index');
}