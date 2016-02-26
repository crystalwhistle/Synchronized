
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
// Adding route for create new event page
var createNewEvent = require('./routes/createNewEvent');
var updateJSON = require('./routes/updateJSON');
var app = express();
var project = require('./routes/project');
var createNewEvent = require('./routes/createNewEvent');
var editEvents = require('./routes/editEvents');
var help = require('./routes/help');
var search = require('./routes/search');
var settings = require('./routes/settings');
var share = require('./routes/share');
var playNow = require('./routes/playNow');
var addSong = require('./routes/addSong');
var deleteEvent = require('./routes/deleteEvent');
var updateEvent = require('./routes/updateEvent');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/index', index.view);
app.get('/indexB', index.viewB);
//app.get('/createNewEvent', createNewEvent.view);
app.get('/project/:name', project.viewProject);
app.get('/editEvents', editEvents.view);
app.get('/help', help.view);
app.get('/updateJSON', updateJSON.view);
app.get('/search', search.view);
app.get('/settings/:name', settings.view);
app.get('/share', share.view);
app.get('/playNow', playNow.view);
app.get('/addSong', addSong.view);
// Example route
// app.get('/users', user.list);
app.get('/createNewEvent', createNewEvent.addEvent);
app.get('/deleteEvent/:name', deleteEvent.view);
app.get('/updateEvent/:name', updateEvent.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
