function PlayersController(){
    var loading = true;
    var playerService = new PlayerService(ready);
    function ready(){
        
        loading = false;
    }
    //PUBLIC
    this.addPlayer = function addPlayer(id){
        playerService.addPlayer(id)
        drawMyPlayers()
    }
    this.removePlayer = function removePlayer(id){
        playerService.removePlayer(id)
        drawMyPlayers()
    }
    this.getPlayersByTeam = function getPlayersByTeam(event){
        event.preventDefault()
        var teamName = event.target.team.value
        var filtered = playerService.getPlayersByTeam(teamName)
        updatePlayers(filtered)
    }
    this.getPlayersByPosition = function getPlayersByPosition(event){
        event.preventDefault()
        var position = event.target.position.value
        var filtered = playerService.getPlayersByPosition(position)
        updatePlayers(filtered)
    }
    this.getPlayersByName = function getPlayersByName(event){
        event.preventDefault()
        var name = event.target.name.value
        var filtered = playerService.getPlayersByName(name)
        updatePlayers(filtered)
    }
    //PRIVATE
    function drawRoster(players){
        var playersElem = document.getElementById('player')
        var players = playerService.getPlayers()
        template=''
        for (var i=0; i<players.length; i++){
            var player = players[i];

            template += `
            <div class="col-xs-4 sizing">
                <div class="player-roster">
                    <div class="player-card text-center">
                        <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"></img>
                        <h3>Name: ${player.fullname}</h3>
                        <h5>Team: ${player.pro_team}</h5>
                        <h5>Position: ${player.position}</h5>
                        <button class="btn btn-success" onclick="app.controllers.playerCtrl.addPlayer(${player.id})">Add</button>
                    </div>
                </div>
            </div>
            `
        }
        playersElem.innerHTML = template
    }
    function drawMyPlayers(){
        var myPlayersElem = document.getElementById('my-team')
        var players = playerService.getMyPlayers()
        template=''
        for (var i=0; i<players.length; i++){
            var player = players[i];
            
            template += `
            <div class="col-xs-4 sizing">
            <div class="player-roster">
            <div class="player-card text-center">
            <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"></img>
            <h3>Name: ${player.fullname}</h3>
            <h5>Team: ${player.pro_team}</h5>
            <h5>Position: ${player.position}</h5>
            <button class="btn btn-success" onclick="app.controllers.playerCtrl.removePlayer(${player.id})">Remove</button>
            </div>
            </div>
            </div>
            `
        }
        myPlayersElem.innerHTML = template
    }
    function updatePlayers(arr){
        var playersElem = document.getElementById('player')
        template=''
        for (var i=0; i<arr.length; i++){
            var player = arr[i];

            template += `
            <div class="col-xs-4 sizing">
                <div class="player-roster">
                    <div class="player-card text-center">
                        <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"></img>
                        <h3>Name: ${player.fullname}</h3>
                        <h5>Team: ${player.pro_team}</h5>
                        <h5>Position: ${player.position}</h5>
                        <button class="btn btn-success" onclick="app.controllers.playerCtrl.addPlayer(${player.id})">Add</button>
                    </div>
                </div>
            </div>
            `
        }
        playersElem.innerHTML = template
    }
    drawRoster()
}