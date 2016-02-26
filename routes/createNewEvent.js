var data = require("../newEventData.json");

exports.addEvent = function(req, res){
    console.log(data);
    //var eventName = req.params.name;
    //res.render('createNewEvent', data);

    var image = req.query.image;

    if (req.query.image == "") {
    	image = "images/defaultEvent.jpg"
    }

    if (req.query.name && req.query.date) {
    	var newEvent = {"name" : req.query.name,
						"date" : req.query.date,
						"image": req.query.image,
						"id": "",
						"setIMG": "settings.png",
						"empty": "",
        				"currentlyPlaying": "",
       				    "playlist1": [
        				]
						}
	data["projects"].push(newEvent);
	res.render('index',data);
	}
	else {
		res.render('createNewEvent', data);
	}
}