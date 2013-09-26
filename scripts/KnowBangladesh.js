function KnowBangladesh( slideData ){

	this.appName = "Know Bangladesh";
	this.nextPage = "";
	this.prevPage = "";
	this.dataArr = slideData;
	this.currentSlide = -1;

}

/**
 * Next Slide
 */

KnowBangladesh.prototype.next = function(){

	if( this.currentSlide == this.dataArr.length - 1 ) {
		alert( "No more slides!" );
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
		alert( "No more slides!" );
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