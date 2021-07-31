
var gameState=0;
var playerCount;

var form, game, player
var allPlayers

var car1, car2, car3, car4
var cars = []

var myRank

function preload(){
car1img=loadImage("images/car1.png")

car2img=loadImage("images/car2.png")

car3img=loadImage("images/car3.png")

car4img=loadImage("images/car4.png")

trackimg=loadImage("images/track.jpg")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);

  game1 = new Game()
  game1.getState()
  game1.start()
}

function draw(){
  background("white");                              
  
  if(playerCount===4){
    gameState=1
    game1.update(1)
  }
  
  if(gameState===1){
    game1.play()
  }

  

  if(gameState===2){
    game1.end()
  }
}

