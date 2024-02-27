const app = Vue.createApp({
    data() {
        return {
            movieDetails: null
        };
    },
    methods: {
        makeAjaxRequest() {
            axios.get("http://www.omdbapi.com/?apikey=b31db97e&i=tt3896198")
                .then(response => {
                    this.movieDetails = response.data;
                })
                .catch(error => {
                    console.error('Error fetching movie details:', error);
                });
        }
    }
});

app.mount('#app');
