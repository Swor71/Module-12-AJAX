var url = 'http://api.icndb.com/jokes/random';

var $button = $('#get-joke').click(function() {
	getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
	$.ajax({
		url: url,
		method: 'GET',
		success: function(res) {
			$paragraph.text(res.value.joke);
		}
	});
}
getJoke();
