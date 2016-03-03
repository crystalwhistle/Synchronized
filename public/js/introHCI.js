/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	var loadDate = new Date();

	$('#newEventVA').on('click', function (event) {
		var now = new Date();
		var elapsed = now - loadDate;

		console.log("Elapsed:" + elapsed);
		console.log("Create new event button clicked");

		ga("send", "event", "newEventVA", "click", elapsed);
	})


	$('#newEventVB').on('click', function (event) {
		var now = new Date();
		var elapsed = now - loadDate;

		console.log("Elapsed:" + elapsed);
		console.log("Create new event button clicked");

		ga("send", "event", "newEventVB", "click", elapsed);
	})

}'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
