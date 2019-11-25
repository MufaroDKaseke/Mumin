(function ($) {
  "use strict";

   $('#open-nav').on('click', function() {
    $('#nav').toggleClass('open');
  });

   $('#main').on('click', function() {
   	if ($('#nav').hasClass('open') ) {
    	$('#nav').removeClass('open');
   	}
  });





})(jQuery);
