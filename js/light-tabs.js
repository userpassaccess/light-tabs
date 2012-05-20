(function($){
	$.fn.lightTabs = function(){
		return this.each(function() {
			var el = $(this),
        hash = location.hash;

      /*Add Default Class*/
			el.addClass('light-tabs');

			el.find('> ul.light-tabs-nav > li > a').bind('light-tab-open', function(){
				var $ths = $(this),
					$parent = $ths.data('light-tabs');
					hash = $ths.attr('href');

				$parent.find('> .light-tab').addClass('light-tab-closed').removeClass('light-tab-opened');
				$parent.find('> ul.light-tabs-nav > li > a.light-tab-current').removeClass('light-tab-current');
				
				$ths.addClass('light-tab-current');
				$parent.find(hash).addClass('light-tab-opened').removeClass('light-tab-closed');
			}).bind('click', function(){
				var $ths = $(this);
				if( ! $ths.hasClass('light-tab-current') ){
					$ths.trigger('light-tab-open');
				}
				return false;
			}).data('light-tabs', el);

			from_hash = el.find('> ul.light-tabs-nav > li > a[href="'+hash+'"]');
      ele = from_hash.length ? from_hash : el.find('> ul.light-tabs-nav > li:first > a');
      ele.trigger('light-tab-open');

		});
	}
})(jQuery);