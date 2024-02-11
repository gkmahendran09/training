new Vue({
    el: '#app',
    data: {
      newPlayerName: '',
      players: []
    },
    methods: {
      addPlayerToList() {
        if (this.newPlayerName !== '') {
          this.players.push(this.newPlayerName);
          this.newPlayerName = ''; // Clear the input field
        }
      }
    }
  });
  