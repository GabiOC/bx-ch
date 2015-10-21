
			var form_transition_effect = 'slide';
			var timers = [];
			var errored =false;
            var dont_wait = 0;

			jQuery(window).load(function(){
				if(errored){
					XD.postMessage('failed');
				}else{
					XD.postMessage('loaded');
				}

				XD.receiveMessage(function(message){
					if (typeof message === 'string') {
						var m = message.split('&');
						message = m[0];
						if(message=='bcx_pop'){

							if(m[1]){
								var cookie = m[1].split('cookie=')[1];
								jQuery('[name=cookie]').val(cookie);
							}

							if(timers && timers.length){
								for(k in timers){
									if(typeof(timers[k])=='function'){
										timers[k]();
									}
								}
							}

															jQuery(document).ajaxComplete(function (event, xhr, settings) {
	if (settings.url.indexOf('capture/submit') > -1 && xhr.responseText.indexOf('is already subscribed') > -1) {
		var js = 'bouncex.close_ad(160001);bouncex.show_ad(160120);';
		XD.postMessage('eval&js='+encodeURIComponent(js));
	}
});

							try{
								validate_coupons_seen($('#step_0'));
							} catch(e){

							}

						}
					}
				});
			});
			jQuery(document).ready(function(){
				jQuery('a').bind('click.bcx',function(e){
					e = $(this);
					var goes_somewhere = e.attr('onclick') || e.attr('href');
					if(goes_somewhere){
						if(e.attr('onclick')&& e.attr('onclick').indexOf('bcx_close_ad')>-1){

						}else{
							XD.postMessage('report_click');
							if(e.attr('target')=='_top' && e.attr('href').indexOf('/')>0){

								setTimeout(function(){
									window.top.location = e.attr('href');
								},300);
								return false;
							}
						}
					}
					if(e.hasClass('close_after_click')){
						XD.postMessage('bcx_close_ad');
						if(!goes_somewhere)
							return false;
					}
				});
							});
		
