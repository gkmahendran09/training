$(document).ready(function() {
    $('#ajaxButton').click(function() {
        makeAjaxRequest();
    });
});

function makeAjaxRequest() {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=b31db97e&i=tt3896198",
        method: "GET",
        success: function(response) {
            displayResult(response);
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}

function displayResult(data) {
    var resultDiv = $('#result');
    resultDiv.html("<h3>Movie Details</h3>" +
        "<p>Title: " + data.Title + "</p>" +
        "<p>Year: " + data.Year + "</p>" +
        "<p>Rated: " + data.Rated + "</p>" +
        "<p>Released: " + data.Released + "</p>" +
        "<p>Runtime: " + data.Runtime + "</p>" +
        "<p>Genre: " + data.Genre + "</p>" +
        "<p>Director: " + data.Director + "</p>" +
        "<p>Actors: " + data.Actors + "</p>" +
        "<p>Plot: " + data.Plot + "</p>");
}
