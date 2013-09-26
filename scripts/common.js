
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


// TapHold

$(document).bind( "taphold", function(){
	$("#menuDiv").popup( "open" );
} );


// Menu Bindings

$(document).on( "tap", "li", function(event, uiElem){

	switch( $(this).attr( "id" ) ){

		case "homeBtn":
			appInstance.goto( 0 );
			break;

		case "endBtn":
			appInstance.goto( appInstance.dataArr.length - 1 );
			break;

		case "prevBtn":
			appInstance.previous();
			break;

		case "nextBtn":
			appInstance.next();
			break;

		case "infoBtn":
			$("#menuDiv").popup( "close" );
			appInstance.prepareInfo();
			setTimeout( function(){
				$("#infoDiv").popup( "open" );
			}, 1000 );
			
			break;



	}

} );