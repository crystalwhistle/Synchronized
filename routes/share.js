var data = require("../newEventData.json");

exports.view = function(req, res){
	var name = req.params.name;
	console.log("The project name is: " + name);
	
	var insertName = {
		"name": name
	}

	res.render('share', insertName);
}