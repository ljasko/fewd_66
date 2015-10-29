var data = [
	{
		title: 'Donald Trump is Your Drunk Uncle at Thanksgiving with this Chrome Extension',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur.'
	},
	{
		title: 'Fun Halloween Costumes For People Who Hate Their Kids',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur.'
	},
	{
		title: 'BOOF!',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur.'
	},
	{
		title: 'This is a super boring title',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur.'
	},
	{
		title: 'Yeah yeah yeah yeah yeah',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur.'
	},
	{
		title: 'rawr',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur.'
	},
	{
		title: 'slicesliceslice',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ratione molestiae hic recusandae temporibus, magnam quos, aliquid modi voluptate odio sit similique? Alias, error adipisci culpa minus debitis, magnam consequuntur.'
	}
]

var itemPerPage = 3;

currentPage = 1;
if (location.hash) {
	var currentPage = parseInt(location.hash.replace('#page',''), 10)
};

var startNumber = currentPage * itemPerPage - itemPerPage;
var endNumber = startNumber + itemPerPage;

var newData = data.slice(startNumber, endNumber);

$.each(newData, function(index, value) {
  var htmlTpl = '<article>';
	htmlTpl += '<h1>' + value.title + '</h1>';
	htmlTpl += '<p>' + value.body + '</p>';
	htmlTpl += '</article>';

	$('#content').append(htmlTpl);
});

function goToNext(event) {
	event.preventDefault();
	var currentPage = 1;
	if (location.hash) {
		var currentPage = parseInt(location.hash.replace('#page',''), 10)
	};
	var nextPageNumber = currentPage + 1;
	history.pushState(history.state,
		'history' ,
		location.pathname + '#page2' + nextPageNumber);
};

function goToPre(event) {
	event.preventDefault();
};

$('.next').on('click', goToNext);
$('.pre').on('click', goToPre);