var newEventData = require("../newEventData.json");

exports.view = function(req, res){
	newEventData["showAlternate"] = false;
    res.render('index', newEventData);
};

exports.viewB = function(req, res){
	newEventData["showAlternate"] = true;
	res.render('index', newEventData);
}