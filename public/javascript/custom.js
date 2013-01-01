
$(document).ready(function() {
	
		
	
	$("#navbar").affix();
	
	$.scrollTo("#regionMidwest");
	
	
	$("#eastBtn").bind('click', function() {
		
		$.scrollTo("#regionMidwest", 800);
		
	});
	
	$("#westBtn").bind('click', function() {
		//$("#regionEast").css('padding-top', '150px');
		$.scrollTo("#regionEast", 800);
		
		
	});
	
		
	
	
	
	
	
});
