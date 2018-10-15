$(document).ready(function(){
	$('div[id="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});
	$(function(){
		$("#uploadMyFile1").on('click', function(e){
			e.preventDefault();
			$("#upload:hidden").trigger('click');
		});
	});  
	$(function(){
		$("#uploadMyFile2").on('click', function(e){
			e.preventDefault();
			$("#uploadStory:hidden").trigger('click');
		});
	});  

});