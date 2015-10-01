// WRITE CODE HERE
// To create a cash register

// A SUPER handy function that makes
// our normal values look pretty
// when we place them on the page
function currencyFormat(number) {
    var currency = parseFloat(number);
    currency = currency.toFixed(2);
    currency = '$' + currency;
    return currency;
}

// Set total to 0
// Submit number into input field
// Add entered number value to total
// Display updated total
// Return input field to default state

var total = 0

$('form').on('submit', updateReceipt);

function updateReceipt() {

	event.preventDefault();

	var newEntry = $('input').val();

	// not using word var because it'd be localized as a new variable
	total = parseFloat(newEntry) + parseFloat(total);

	$('#entries').append('<div>' + currencyFormat(newEntry) + '<div>');
	$('#total').html(currencyFormat(total));
}