document.getElementById("ajaxButton").addEventListener("click", makeAjaxRequest);

function makeAjaxRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.omdbapi.com/?apikey=b31db97e&i=tt3896198", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            displayResult(response);
        }
    };
    xhr.send();
}

function displayResult(data) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h3>Movie Details</h3>" +
                          "<p>Title: " + data.Title + "</p>" +
                          "<p>Year: " + data.Year + "</p>" +
                          "<p>Rated: " + data.Rated + "</p>" +
                          "<p>Released: " + data.Released + "</p>" +
                          "<p>Runtime: " + data.Runtime + "</p>" +
                          "<p>Genre: " + data.Genre + "</p>" +
                          "<p>Director: " + data.Director + "</p>" +
                          "<p>Actors: " + data.Actors + "</p>" +
                          "<p>Plot: " + data.Plot + "</p>";
}
