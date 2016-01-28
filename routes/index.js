
/*
 * GET home page.
 */

exports.view = function(req, res){
    res.render('index', {
    'projects': [
      { 'name': "Crystal's 21st Birthday",
        'date': "March 24 2016",
        'image': '21party.jpeg',
        'id': 'project1',
        'setIMG': 'settings.png'
      },
      { 'name': 'Launch Party',
        'date': "May 15 2016",
        'image': 'launchparty.jpg',
        'id': 'project2',
        'setIMG': 'settings.png'
      },
      { 'name': 'EDC Pregame',
        'date': "June 21 2016",
        'image': 'edc.jpg',
        'id': 'project3',
        'setIMG': 'settings.png'
      },
      
    ]
  });
}