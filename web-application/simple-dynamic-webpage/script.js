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
        movieInfo.scrollIntoView(); 
        

      }
    }
  });
  
