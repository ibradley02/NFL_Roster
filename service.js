var PlayerService = function PlayerService(callback) {
  var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
  var playersData = [];

  this.getPlayersByTeam = function (teamName) {
    var filteredPlayers = playersData.filter(function (player) {
      if (player.team === "SF") {
        return true;
      }
    });

    console.log(filteredPlayers);
  }

  this.getPlayersByPosition = function (position) {
    // ...
  }

  function loadPlayersData() {

    var localData = localStorage.getItem('playersData');
    if (localData) {
      playersData = JSON.parse(localData);
      return callback();
    }


    var url = "https://bcw-getter.herokuapp.com/?url=";
    var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var apiUrl = url + encodeURIComponent(endpointUri);

    $.getJSON(apiUrl, function (data) {
      playersData = data.body.players;
      console.log('Player Data Ready')
      console.log('Writing Player Data to localStorage')
      localStorage.setItem('playersData', JSON.stringify(playersData))
      console.log('Finished Writing Player Data to localStorage')
      callback()
    });
  }
loadPlayersData();
}