//demo plugin
(function($){

	$.fn.reverseText = function(params){

		params = $.extend({minlength:0, maxlength:9999}, params);

		this.each(function(){
			var $t= $(this);
			var origText = $t.text();
			var newText = '';
			
			// text length within defined limits?
			if (origText.length >= params.minlength &&  origText.length <= params.maxlength) 
			{

							// reverse text
				for (var i = origText.length-1; i >= 0; i--) newText += origText.substr(i, 1);
				$t.text(newText);
			}
		});

		return this;
	};

})(jQuery);