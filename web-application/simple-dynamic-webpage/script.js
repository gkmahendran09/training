new Vue({
    el: '#app',
    data: {
      movie: {
        title: '',
        director: '',
        year: null,
        description: ''
      }
    },
    methods: {
      updateMovieInfo() {
        var movieInfo = document.getElementById('movieInfo');
        movieInfo.scrollIntoView(); // Scroll to the movie info section
        
        // You can perform additional validation here if needed
        
        // Display the movie details
        movieInfo.innerHTML = `
          <h3>${this.movie.title}</h3>
          <p><strong>Director:</strong> ${this.movie.director}</p>
          <p><strong>Year:</strong> ${this.movie.year}</p>
          <p><strong>Description:</strong><br>${this.movie.description}</p>
        `;
      }
    }
  });
  