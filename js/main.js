"use strict";

let currentScreen = MENU;
let menu = new Menu();
let level = new Level();
let player = new Player();
let lose = new Lose();
let gameSprites;
let bullets; //group for bullets
let originalCamPos = { //for repositioning camera back to where it starts
  x: 550,
  y: 375
};

function preload() {

}

function setup() {
  createCanvas(1100, 750);
  gameSprites = new Group(); //I've been putting each screen in it's own group, and calling draw on the groups
  bullets = new Group();
 
  menu.setup();
  level.setup();
  player.setup();
  lose.setup();

}
function draw() {
  background(0);
  if(currentScreen == MENU){
    menu.draw();
  } else if(currentScreen == GAME){
    level.draw();
    player.draw();
  } else if(currentScreen == LOSE){
    lose.draw();
  }
}