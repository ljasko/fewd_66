// STATE OF OUR PAGE
var lightSwitch = 'on';

$('#light-switch').on('click', updateLight)

// CHECK STATE OF PAGE
// if on, turn off
function updateLight() {
	$('body').toggleClass('dark');
	// $('body').addClass('dark');
	// else if it has the class dark
	// $('body').removeClass('dark')
}

// 	if(lightSwitch == 'on') {
// 		// turn page dark
// 		$('body').css('background-color','#231f20');
// 		lightSwitch = 'off';
// 	} else {
// 		// turn page light
// 		$('body').css('background-color','white');	
// 		lightSwitch = 'on';
// 	}
// }