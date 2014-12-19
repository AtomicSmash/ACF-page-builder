jQuery(document).ready(function( $ ) {

	$('.layout .layout').attr('data-toggle', 'closed');
	

	$( ".layout .layout .acf-fc-layout-handle" ).live( "click", function() {
		$(this).parent().before( "<div class='acf-layout-modal-clickmask'></div>" );
		$(this).parent().addClass('openModal');
		$('.CodeMirror').each(function(i, el){
	            el.CodeMirror.refresh();
	        });
	});

	$( ".acf-layout-modal-clickmask" ).live( "click", function() {
		$(".openModal .acf-fc-layout-handle").click();

		//There should only be one background in existance
		$(".acf-layout-modal-clickmask").remove();
		$( ".openModal" ).removeClass('openModal');

	});		

});
