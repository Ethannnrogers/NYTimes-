var searchTerm = $("#form-group-input").val();
var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&fl=web_url&fl=headline&fl=subject&fl=body&api-key=5514deb791b24606934dfddee60d4dba";

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
    console.log(response);
})