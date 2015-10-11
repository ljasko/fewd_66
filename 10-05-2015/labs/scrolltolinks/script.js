$('a').on('click', jump);

function jump(){
	event.preventDefault();
	var $currentTarget = $(event.currentTarget);
	var targetId = $currentTarget.attr('href');

	$currentTarget.offset();

}