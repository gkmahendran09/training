document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    updateMovieInfo();
});

function updateMovieInfo() {
    var title = document.getElementById('title').value;
    var director = document.getElementById('director').value;
    var year = document.getElementById('year').value;
    var description = document.getElementById('description').value;

    var movieInfo = document.getElementById('movieInfo');
    movieInfo.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Director:</strong> ${director}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Description:</strong><br>${description}</p>
    `;
}
