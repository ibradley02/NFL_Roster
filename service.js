var PlayerService = function PlayerService(callback) {
  var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
  var playersData = [];
  var myPlayers = [];
  this.getPlayers = function(){
    return playersData;
  }

  this.getPlayersByTeam = function (teamName) {
    return playersData.filter(function (player) {
      if (player.team == teamName) {
        return true;
      }
    })
  }

  this.getPlayersByPosition = function (position) {
    var filteredPlayers = playersData.filter(function (player) {
      if (player.team === "SF") {
        return true;
      }
    });
  }

  this.addPlayer = function addPlayer(id){
    for (var i = 0; i < playersData.length; i++) {
      var player = playersData[i];
      if (player.id == id){
        myPlayers.push(player)
        console.log(myPlayers)
      }
    }
  }

  function loadPlayersData() {

    var localData = localStorage.getItem('playersData');
    if (localData) {
      playersData = JSON.parse(localData);
      return callback();
    }


    var url = "https://bcw-getter.herokuapp.com/?url=";
    var endpointUri = "https://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
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
  console.log(playersData)
}