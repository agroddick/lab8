// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function(){
		$(".judge-img").bind("taphold", tapHoldHandler);

		function tapHoldHandler(event){
			// get the id of the event source
			var targetIDPrefix = event.target.id;
			console.log("got prefix: " + targetIDPrefix);
			//show bio
			$("#" + targetIDPrefix + "-bio").show();
		}
	})
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e){

	e.preventDefault();
	console.log("Submitting form...");
	var rsvpEmail = $("rsvpEmail").val();
	//Send POST request
	$.post('addRSVP', { rsvpEmail: rsvpEmail }, postCallBack);
  })
}

function postCallBack(res){
	alert("RSVP form submitted successfully");
	$('#rsvpEmail').val(''); //Clear form
}