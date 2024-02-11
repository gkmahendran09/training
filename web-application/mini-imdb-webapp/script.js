new Vue({
    el: '#app',
    data: {
      searchTerm: '',
      movieDetails: null
    },
    methods: {
      toggleMenu() {
      },
      searchMovie() {
        var searchTerm = this.searchTerm.trim();
  
        if (searchTerm === "") {
            alert("Please enter a movie title.");
            return;
        }
  
        fetch("http://www.omdbapi.com/?apikey=b31db97e&t=" + searchTerm)
          .then(response => response.json())
          .then(data => {
            if (data.Response === "True") {
              this.movieDetails = data;
            } else {
              alert("Movie not found!");
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    }
  });
  