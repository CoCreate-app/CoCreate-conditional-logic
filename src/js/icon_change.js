$(function(){
	//ICON CHANGE
	$('i').on('click',function(e){
		e.preventDefault()
		if(typeof $(this).data('transform_to') != 'undefined'){
			clases = $(this).attr('class');
			transform_to = $(this).data('transform_to');
			$(this).attr('class',transform_to)
			$(this).data('transform_to',clases);
		}
	});
});