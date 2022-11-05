"use strict";

let currentScreen = MENU;
let menu = new Menu();
let level = new Level();
let player = new Player();
let enemy = new Enemy();

function preload() {

}

function setup() {
  createCanvas(1100, 750);
  menu.setup();
  level.setup();
  player.setup();
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
  }
}