"use strict";

let currentScreen = MENU;
let menu = new Menu();
let level = new Level();
let player = new Player();
let lose = new Lose();
let gameSprites;
let bullets; //group for bullets
let enemybullets;
let enemies;

let originalCamPos = { //for repositioning camera back to where it starts
  x: 550,
  y: 375
};
let enemy = new Enemy();

function preload() {

}

function setup() {
  createCanvas(1100, 750);
  gameSprites = new Group(); //I've been putting each screen in it's own group, and calling draw on the groups
  bullets = new Group();
  enemybullets = new Group();
  enemies = new Group();
  menu.setup();
  level.setup();
  player.setup();
  lose.setup();

  enemy.setup();
}


function draw() {
  background(0);
  if(currentScreen == MENU){
    menu.draw();
  } else if(currentScreen == GAME){
    level.draw();
    player.draw();
   enemy.draw();
    collisionCheck();

    
  } else if(currentScreen == LOSE){
    lose.draw();
  }
}


function collisionCheck(){
  
  //enemy bullets collide player
  //player bullets collide enemy
  //player collide with goal .....eventually
}