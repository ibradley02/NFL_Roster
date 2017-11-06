function Controller(){
    var loading = true; //Start the spinner
    var playerService = new PlayerService(ready);
    function ready(){
        
        loading = false; //stop the spinner
    
        //Now that all of our player data is back we can safely setup our bindings for the rest of the view.
        
        $('some-button').on('click',function(){
          var teamSF = playerService.getPlayersByTeam("SF");
        })
    }
    function draw(playerList){
        template=''
        for (var i; i<playerList.length; i++){
            var player = playerList[i];

            template += `
            <div class="panel">
            <div class="panel-heading">
                <div class="panel-title text-center">
                    <h1>My NFL Roster</h1>
                </div>
            </div>
            <div class="panel-body">
                <div class="player-roster">
                    <div class="player-card">
                        <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"></img>
                        <h3>Name:</h3>
                        <h5>Team: ${playersData.team}</h5>
                        <h5>Position:</h5>
                    </div>
                </div>
                <div class="my-team"></div>
            </div>
        </div> 
            `
        }
        document.getElementById('player')
    }
}