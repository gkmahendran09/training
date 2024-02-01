document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchMovie();
    }
});

function searchMovie() {
    var searchTerm = document.getElementById("searchInput").value.trim();
    
    if (searchTerm === "") {
        alert("Please enter a movie title.");
        return;
    }
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.omdbapi.com/?apikey=b31db97e&t=" + searchTerm, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.Response === "True") {
                displayResult(response);
            } else {
                alert("Movie not found!");
            }
        }
    };
    xhr.send();
}

function displayResult(data) {
    var movieDetailsDiv = document.getElementById("movieDetails");
    movieDetailsDiv.style.color = "white";
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
    movieDetailsDiv.innerHTML = resultHTML;
}
