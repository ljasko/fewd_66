$('form').validate();

$('input[name="start_date"]').datepicker({
	minDate: 0,
	maxDate: +7
});

$('input[name="end_date"]').datepicker({
	minDate: +1,
	maxDate: +7
});

$('input[name="state"]').autocomplete({
	minLength: 2,
  	source: [
	  	"Alabama",
	    "Alaska", 
	    "Arizona", 
	    "Arkansas", 
	    "California"
	]
});