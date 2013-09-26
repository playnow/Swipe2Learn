
var appInstance = new KnowBangladesh( slides ) ;

// Bind actions

$(document).ready(function(){

	appInstance.next();

	console.log( "hello world" );

});

// Swipe Left

$(document).on( "swipeleft", function(event) {
	
	appInstance.next();

} );

// Swipe Right

$(document).on( "swiperight", function(event) {
	appInstance.previous();
} );
