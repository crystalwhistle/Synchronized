'use strict';

// Call this function when the page loads (the "ready" event)
/*$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
/*function initializePage() {
	// add any functionality and listeners you want here
}*/
var playlist1 = require('../../playlist1.json');
function helloWorld(){
	console.log(playlist1);
	//console.log("helloworld");
	playlist1["currentlyPlaying"] = playlist1["nextPlaying"];
	res.render('project', playlist1);
}