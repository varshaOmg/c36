class Game{

constructor(){
}

readState(){
var gamestateRef = db.ref("gamestate")  
gamestateRef.on("value",function(data){
    gamestate = data.val()
}) 
    
}

updateState(state){
    db.ref("/").update({
        gamestate:state
    })
}

start(){
    if (gamestate == 0){
        player = new Player()
        player.readCount()
        form = new Form()
        form.display()
        
    }
}






}