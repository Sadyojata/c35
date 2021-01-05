class Player{
    constructor(){

    }
    //to read the player count 
    getCount(){
        var playerCountRef=database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount=data.val();

        })
    }

    // to update the player count
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    //to update the name of the player
    update(name){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}