class Player{

    constructor(){
    }
    
    readCount(){
    var playerCountRef = db.ref("playercount")  
    playerCountRef.on("value",function(data){
        playercount = data.val()
    }) 
        
    }
    
    updateCount(count){
        db.ref("/").update({
            playercount:count
        })
    }
   
    updateName(name){
        var playerIndex = "player"+playercount
        db.ref(playerIndex).set({name:name})     
    }



}