var moduleUI = (function(moduleUI, $, undefined){

	// globalObj
	moduleUI.globalObj = {
		blackBG : "<div class='blackBG'></div>"
	};
	
	// GNB 
	moduleUI.gnbShow = function(){
		this.init = function(){
			this.initEvent();
		};
		this.initEvent = function(){
			
		};
		this.init();
	};
	 
	return moduleUI;

})(window.moduleUI || {}, jQuery);

$(window).on("load", function(){
	
});
