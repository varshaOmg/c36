var db,form,game,player;
var gamestate = 0;
var playercount;

function setup(){

createCanvas(400,400);
db = firebase.database() 
game = new Game()
game.readState()
game.start()

}

function draw(){







}



























