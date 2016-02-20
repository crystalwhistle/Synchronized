'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
}'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

	$('#deleteEvent').click(deleteEvent);
	$('#udpateBtn').click(updateEvent);
}

/*
 * Function to delete an event.
 */
function deleteEvent(e) {
	console.log("Clicked delete event button");

	//stuff below doesn't work yet, still
	//trying to figure out a way to pass in parameters

	//might try to call function findAndRemove
	//at the bottom but still working on it

	var name = req.params.name;
	console.log("The project name is " + name)

	for ( var i=0; i<data.projects.length; i++ ) {
		console.log("test");
		console.log(data.projects[i]);
		console.log(data.projects[i].name);
    if (data.projects[i].name == name) {
      var entry = data.projects[i];

      console.log(entry);

      // Modifiy the entry as you wish here.
      // The question only mentioned setting "finished" to true, so that's
      // what I'm doing, but you can change it in any way you want to.
      entry.finished = true;

      break;
    }
  }

}

/*
 * Function to update event info.
 */
function updateEvent(e) {
	console.log("Clicked update event button");
	//code to updateEvent here
}

function findAndRemove(array, property, value) {
  array.forEach(function(result, index) {
    if(result[property] === value) {
      //Remove from array
      array.splice(index, 1);
    }    
  });
}