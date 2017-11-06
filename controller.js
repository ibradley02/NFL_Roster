function PlayersController(){
    var loading = true; //Start the spinner
    var playerService = new PlayerService(ready);
    function ready(){
        
        loading = false; //stop the spinner
    
        //Now that all of our player data is back we can safely setup our bindings for the rest of the view.
        
        $('some-button').on('click',function(){
          var teamSF = playerService.getPlayersByTeam("SF");
        })
    }
    var playersElem = document.getElementById('player')
    function draw(){
        var players = playerService.getPlayers()
        template=''
        for (var i=0; i<players.length; i++){
            var player = players[i];

            template += `
                <div class="player-roster">
                    <div class="player-card">
                        <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"></img>
                        <h3>Name: ${players.fullname}</h3>
                        <h5>Team: ${playerService.playersData.pro_team}</h5>
                        <h5>Position: ${players.position}</h5>
                    </div>
                </div>
                <div class="my-team"></div>
            `
        }
        playersElem.innerHTML = template
    }
    draw()
}