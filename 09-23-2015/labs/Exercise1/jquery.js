/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 */

 // Click Button 1
 // Select all paragraphs
 // Change the paragraphs color to blue

function turnBlue() {
	$('p').css('color','blue');
}

$('#button1').on('click', turnBlue);

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 */

 // Click Button 1
 // Select all h2
 // Change h2 text to Liz

 function sayLiz() {
 	$('h2').text('Liz');
 }

$('#button1').on('click', sayLiz);

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 */

 // Click Button 1
 // Select "falseFact" ol
 // Change content to "True Fact"

 function sayTrue() {
 	$('.falseFact').text('True Fact')
 }

 $('#button1').on('click', sayTrue);

/**
 * Question 4:
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */

 // Click Button 2
 // Select body
 // Change bg color to pink

 function turnPink() {
 	$('body, header').css('background','pink')
 }

 $('#button2').on('click', turnPink);

/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */

 // Click Button 2
 // Select h2s
 // Change color to green

 function turnGreen() {
 	$('h2').css('color','green')
 }

 $('#button2').on('click', turnGreen);

/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

 // Click Button 2
 // Select blockquotes
 // Change content to "<span>no quote</span>"

 function changeBQ() {
 	$('blockquote').text('<span>no quote</span>')
 }

 $('#button2').on('click', changeBQ);

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

 function sayNinja() {
 	$('h1').text('jQuery Ninja')
 }

 $('#button3').on('click', sayNinja)

/**
 * Question 8:
 * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */

 function mysteryCode() {
 	$(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 }

  $('#button3').on('click', mysteryCode)

  // The city class was told to change the attribute for its image source to the one specified in the function.

/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
 */

 function pChange() {
 	$('p').css({
 		'color':'blue',
 		'font-family':'Georgia'
 	});
 }

  $('#button3').on('click', pChange)