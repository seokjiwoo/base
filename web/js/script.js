var packageUI = (function(packageUI, $, undefined){

	// globalObj
	var globalObj = {
		blockBG : "<div class='blackBG'></div>",
		sct : null
	};

	// GNB
	packageUI.gnb = function( info ){
		this.init = function(){
			
			this.initEvent();
		};
		this.initEvent = function(){
			
		};
		this.init()
	};
	 
	return packageUI;

})(window.packageUI || {}, jQuery);

$(window).on("load", function(){
	
});
