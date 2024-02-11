new Vue({
    el: '#app',
    data: {
      movieDetails: null
    },
    methods: {
      makeAjaxRequest() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://www.omdbapi.com/?apikey=b31db97e&i=tt3896198", true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                this.movieDetails = response;
            }
        };
        xhr.send();
      }
    }
  });
  