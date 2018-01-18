var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";



function createTweet (input) {
	var data = input[0];

	var quoteText = $(data.content).text().trim();
	var quoteAuthor = data.title;

	var tweetText = 'Here\'s your knowledge for today - ' + '\"' + quoteText + '\"' + 'Said: ' + quoteAuthor;

	if (!quoteAuthor.length) {
		quoteAuthor = 'Unknown Author';
	}

	if (tweetText.length > 140) {
		getQuote();
	} else {
		var tweet = tweetLink + encodeURIComponent(tweetText);
		$('.quote').text(quoteText);
		$('.author').text(' Said: ' + quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
};

$(document).ready(function(){
	getQuote();
	$('.trigger').click(function(){
		getQuote();
	})
});

function getQuote() {
    var prefix = "https://cors-anywhere.herokuapp.com/";

    $.getJSON(quoteUrl, createTweet);

    $.getJSON(prefix + quoteUrl, createTweet);
    $.ajaxSetup({ cache: false });
};