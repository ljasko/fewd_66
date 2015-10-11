// PSUDEO CODE:
// Get input value
// Take input value, multiple by 9/5 and add 32
// Save result value
// Clear input form
// Display result value
// If resultNum > 100, change to background-color: #6f0015
// If resultNum > 90, change to background-color: #b10909
// If resultNum > 70, change to background-color: #dd531e
// If resultNum > 50, change to background-color: #fecf3b
// If resultNum > 30, change to background-color: #2dc558
// If resultNum > 10, change to background-color: #3993ce
// If resultNum > 0, change to background-color: #a496c0
// If resultNum < 0, change to background-color: #d1c9df

// Get input value
$('button').on('click', getValue);

function getValue(event) {
    event.preventDefault();
    var inputNum = $('input').val();
    convertTemp(inputNum);
}

// Take input value, multiple by 9/5 and add 32
// Save result value
function convertTemp(num) {
    var resultNum = num * (5/9) + 32;
    console.log(resultNum);
    showResult(resultNum);
}

// Clear input form
// Display result value
// Change background color accordingly
function showResult(num) {
    $('#result').html(num.toFixed(0));
    $('input').val('');
    if(num < 0){
		$('body').css('background-color','#d1c9df')
	}
    if(num > 0){
		$('body').css('background-color','#a496c0')
	}
    if(num > 10){
		$('body').css('background-color','#3993ce')
	}
    if(num > 30){
		$('body').css('background-color','#2dc558')
	}
    if(num > 50){
		$('body').css('background-color','#fecf3b')
	}
    if(num > 70){
		$('body').css('background-color','#dd531e')
	}
    if(num > 90){
		$('body').css('background-color','#b10909')
	}
    if(num > 100){
		$('body').css('background-color','#6f0015')
	}
}

// Outstanding questions:
// 1) How can I make this immediately reusable (from the user perspective) without reloading the page?
// 2) Why did the new value save as "num" instead of "resultNum"? Where did that happen in my code? ...Was expecting "resultNum" and could only debug by having the showResult function target "num" instead of "resultNum"