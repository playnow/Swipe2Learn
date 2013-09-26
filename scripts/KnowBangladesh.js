function KnowBangladesh( slideData ){

	this.appName = "Know Bangladesh";
	this.nextPage = "";
	this.prevPage = "";
	this.dataArr = slideData;
	this.currentSlide = -1;

}

/**
 * Go to Slide
 */

KnowBangladesh.prototype.goto = function( slideNumber ){

	if( slideNumber < 0 || slideNumber > ( this.dataArr.length -1 ) ) {
		this.showError( "Slide out of range!" );
		return false;
	}

	this.currentSlide = slideNumber;
	this.changeSlide();

};

/**
 * Next Slide
 */

KnowBangladesh.prototype.next = function(){

	if( this.currentSlide == this.dataArr.length - 1 ) {
		this.showError( "No more slides!" );
		return;
	}

	this.currentSlide++;

	this.changeSlide();

};

/**
 * Previous Slide
 */

KnowBangladesh.prototype.previous = function(){

	if( this.currentSlide == 0 ) {
		this.showError("No more slides!");
		return;
	}

	this.currentSlide--;

	this.changeSlide();

};

/**
 * Change Slide
 */

KnowBangladesh.prototype.changeSlide = function(){

	var slideObject = this.dataArr[ this.currentSlide ];

	// Title

	var title = ( this._isEmpty( slideObject.title ) ) ? ( this.appName ) : ( slideObject.title ) ;

	$("#title").html( title );

	// Description

	$("#desc").html( slideObject.desc );

	// Background

	$(".ui-body-c").css( "background", "url('images/" + slideObject.img + "')  no-repeat center center fixed");
	$(".ui-body-c").css( "-moz-background-size", "cover");
	$(".ui-body-c").css( "background-size", "cover");

	// "background-image", "url('images/" + slideObject.img + "')" 

};

KnowBangladesh.prototype._isEmpty = function( subject ){

	if( typeof subject === 'undefined' ){
		return true;
	}

	if( subject == null || subject.length == 0 ){
		return true;
	}

	return false;

};

KnowBangladesh.prototype.prepareInfo = function(){

	var slideObject = this.dataArr[ this.currentSlide ];

	// Photo
	var markup = "<b>Photo Source: </b>";
	
	markup += ( this._isEmpty( slideObject.imgCredit ) ) ? ( "None" ) : ( slideObject.imgCredit );
	markup += "<br />";

	// Text
	
	markup += "<b>Text Source: </b>";
	
	markup += ( this._isEmpty( slideObject.txtCredit ) ) ? ( "None" ) : ( slideObject.txtCredit );
	markup += "<br />";

	// Inject Markup

	$( "#infoP" ).html( markup );

};

KnowBangladesh.prototype.showError = function( msg ){
	$("#errorP").html( msg );
	$("#errorDiv").popup( "open" );
};