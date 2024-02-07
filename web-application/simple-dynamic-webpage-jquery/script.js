$(document).ready(function() {
    $('#movieForm').submit(function(event) {
        event.preventDefault();
        updateMovieInfo();
    });

    function updateMovieInfo() {
        var title = $('#title').val();
        var director = $('#director').val();
        var year = $('#year').val();
        var description = $('#description').val();

        var movieInfo = $('#movieInfo');
        movieInfo.html(`
            <h3>${title}</h3>
            <p><strong>Director:</strong> ${director}</p>
            <p><strong>Year:</strong> ${year}</p>
            <p><strong>Description:</strong><br>${description}</p>
        `);
    }
});
