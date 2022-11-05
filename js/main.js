"use strict";

let currentScreen = MENU;
let menu = new Menu();

function preload() {

}

function setup() {
  createCanvas(1100, 750);
  menu.setup();
}
function draw() {
  background(0);
  if(currentScreen == MENU){
    menu.draw();
  } 
}