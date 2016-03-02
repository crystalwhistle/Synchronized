/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	var loadDate = new Date();

	$('#newEvent').on('click', function (event) {
		var now = new Date();
		var elapsed = now - loadDate;

		console.log("Elapsed:" + elapsed);
		console.log("Create new event button clicked");

		//ga("send", "timing", "newEvent", "click", elapsed);
		ga("send", "event", "newEvent", "click", elapsed);
		//ga("send", "event", "newEventButton", "click");

	})
	//$('#newEvent').click(newEventButtonClicked);
}'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
function newEventButtonClicked(e){
	console.log("Create new event button clicked")
	ga("send", "event", "newEvent", "click");
}*/