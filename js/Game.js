class Game{
    constructor(){

    }
    //to read the gamestate
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    // to update the gameState
    update(state){
        database.ref("/").update({
            gameState:gameState
        })
    }
    
    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();

        }
    }
}