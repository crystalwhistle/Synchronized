exports.viewProject = function(req,res){
	var name = req.params.name;
	console.log("The project name is " + name)
	res.render('project', {
		'projectName': name
	});	
};

/*var data = require("../data.json");
exports.view = function(req, res){
    res.render('project', {
    'songs': [
      { 'title': "Holdin On",
        'artist': "Flume",
        'album': 'Flume',
        'time': '2:33'
      },
      { 'title': "Down On My Luck",
        'artist': "Vic Mensa",
        'album': 'Down On My Luck',
        'time': '3:29'
      },
      { 'title': "High You Are (Branchez Remix)",
        'artist': "What So Not",
        'album': 'High You Are Remixes',
        'time': "3:33"
      },
    ]
  });
}*/