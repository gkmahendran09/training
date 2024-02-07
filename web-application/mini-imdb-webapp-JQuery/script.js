$(document).ready(function() {
    // Event handler for Enter key press on search input
    $('#searchInput').on('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            searchMovie();
        }
    });
});

function searchMovie() {
    var searchTerm = $('#searchInput').val().trim();
    
    if (searchTerm === "") {
        alert("Please enter a movie title.");
        return;
    }
    
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=b31db97e&t=" + searchTerm,
        method: "GET",
        success: function(response) {
            if (response.Response === "True") {
                displayResult(response);
            } else {
                alert("Movie not found!");
            }
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}

function displayResult(data) {
    var movieDetailsDiv = $('#movieDetails');
    movieDetailsDiv.css('color', 'white');
    var resultHTML = "<p><b>Title: " + data.Title + "</p>" +
                     "<p>Year: " + data.Year + "</p>" +
                     "<p>Rated: " + data.Rated + "</p>" +
                     "<p>Released: " + data.Released + "</p>" +
                     "<p>Runtime: " + data.Runtime + "</p>" +
                     "<img src='" + data.Poster + "' alt='" + data.Title + " Poster' style='max-width: 100%;'>" +
                     "<p>Genre: " + data.Genre + "</p>" +
                     "<p>Director: " + data.Director + "</p>" +
                     "<p>Actors: " + data.Actors + "</p>" +
                     "<p>Plot: " + data.Plot + "</p>";
    movieDetailsDiv.html(resultHTML);
}
