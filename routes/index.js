var newEventData = require("../newEventData.json");
/*
 * GET home page.
 */

exports.view = function(req, res){
    res.render('index', newEventData);
};