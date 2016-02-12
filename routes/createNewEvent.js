var data = require("../newEventData.json");

exports.addEvent = function(req, res){
    console.log(data);
    res.render('createNewEvent', data);

    var newEvent = {"name" : req.query.name,
					"date" : req.query.date,
					"image": req.query.image,
					"id": "",
					"setIMG": "settings.png"
					}
	data["projects"].push(newEvent);
}