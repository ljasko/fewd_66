// array with name of images
var imageName = ['assisi.png','cinqueterre.png','florence01.png','florence02.png','rome.png']

var imageIndex = 0;

// on load give image proper source
// $('.image-wrapper img').attr('src', 'images/' + imageName[0]);

// add click handler
$('.change-image').on('click', changeImage)

function changeImage() {
	$('.image-wrapper img').attr('src', 'images/' + imageName[imageIndex]);
	// every time we run this function, 
	// let's add one to image index
		imageIndex ++;
		// shorthand for imageIndex + 1;
	if(imageIndex == 4) {
		imageIndex = 0;
	}
}

changeImage();