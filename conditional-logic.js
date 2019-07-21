		$(function(){
			//SHOW_HIDE

			$('.show_hide').on('change',function(e){
				select = $(this);
				$(select.find('option')).each(function(i,option){
					show_id = $(option).data('show-id');
					$(show_id).hide();
					if($(option).prop('selected'))
						$(show_id).show();
				})
			});

			$('.show_hide').on('click',function(e){
				element = $(this);
				show_id = element.data('show-id')
				hide_id = element.data('hide-id')
				if(element.prop("tagName").toLowerCase()=='input' && element.attr('type') == 'radio'){
					$(element.prop("tagName")+'[name="'+element.attr('name')+'"]').each(function(i,checkbox){
						show_id = $(checkbox).data('show-id');
						$(show_id).hide();
						if($(checkbox).prop('checked'))
							$(show_id).show();

					})
				}else{
					$(show_id+","+hide_id).toggle();
				}
			});
		});
