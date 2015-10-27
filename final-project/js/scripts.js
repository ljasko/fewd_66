// CONTENT
var pplData = [
  {
    name: 'Hillary Clinton',
    party: 'Democrat',
    issue: 'Immigration',
    quote: '“I am adamantly against illegal immigrants. Certainly we’ve got to do more at our borders. People have to stop employing illegal immigrants.”',
    citation: '<a href="http://dailycaller.com/2015/05/07/unearthed-audio-hillary-said-shes-adamantly-against-illegal-immigrants-audio/" target="_blank"><em>source</em></a>: Ross, Chuck. <em>The John Gambling Show</em>. Feb. 2003. <em>The Daily Caller</em>. Web. 07 May 2015.'
  },
  {
    name: 'Rand Paul',
    party: 'Republican',
    issue: 'Domestic Economy',
    quote: '“If you were to cut hundreds of billions of dollars in taxes, that money\'s left in communities...We\'re always trying to tax [poor communities] and then give them back a little bit to help them...We ought to leave the money in their communities because the money left will be left for productive people... It doesn\'t work to send it to Washington and then send it back.”',
    citation: '<a href="http://www.foxnews.com/transcript/2015/04/08/exclusive-one-on-one-with-presidential-candidate-rand-paul/" target="_blank"><em>source</em></a>: <em>Hannity</em>. "Exclusive: One-on-one with Presidential Candidate Rand Paul." <em>Fox News</em>. Web. 08 Apr. 2015.>'
  }
];
var index = 0;

// SWAP QUESTION FOR RESULT
$('.btn_question').on('click', showResult)

function showResult() {
  $('.show-question').css("display", "none");
  $('.show-result').css("display", "inline");
}

function hideResult() {
  $('.show-result').css("display", "none");
  $('.show-question').css("display", "inline");
}

// UPDATE CONTENT
$('.btn_next').on('click', function(){
  index++;
  hideResult();
  updatePage();
  console.log('next clicked', index)
  console.log('candName: ', candName)
});

function clearFields(){
  $('#candidate-citation, #candidate-name, #candidate-party, #candidate-issue, .candidate-quote, #candidate-citation').html('');
  console.log('clearFields()')
}

// TOGGLE CITATION
$('.info').on('click', function(event) {
	event.preventDefault();
	$('.citation').slideToggle(200)
});

function updatePage(){
  console.log("updatePage")
  clearFields()

  var candName = pplData[index].name;
  var candParty = pplData[index].party;
  var candIssue = pplData[index].issue;
  var candQuote = pplData[index].quote;
  var candCitation = pplData[index].citation;

  $('#candidate-name').html(candName);
  $('#candidate-party').html(candParty);
  $('#candidate-issue').html(candIssue);
  $('.candidate-quote').html(candQuote);
  $('#candidate-citation').html(candCitation);
}

updatePage();

function nextButton(){
  index++;
  updatePage();
}

function prevButton() {
  index--;
  updatePage();
}

// FORM
$('form').validate();

$('input[name="candidate"]').autocomplete({
  minLength: 2,
    source: [
      "Carly Fiorina",
      "Ben Carson", 
      "Chris Christie", 
      "Ted Cruz", 
      "Lindsey Graham",
      "Hillary Clinton",
      "Mike Huckabee",
      "Bobby Jindal",
      "John Kasich",
      "George Pataki",
      "Rand Paul",
      "Marco Rubio",
      "Martin O'Malley",
      "Jim Webb",
      "Bernie Sanders",
      "Rick Santorum",
      "Donald Trump",
      "Scott Walker"

  ]
});

// // SHARE PLUGIN
// new ShareButton({
//   networks: {
//     facebook: {
//       app_id: "abc123"
//     }
//   }
// });