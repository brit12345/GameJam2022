class Level {
  constructor(){

  }

  preload(){

  }

  setup(){
    

  }

  draw(){

    //some temporary floor for testing
    rect(0, height - 50, 4000, 50);
    for(let i = 0; i < 50; i++){
      push();
      fill("green");
      rect(10 + i*4000/50, height - 50, 2, 50);
      pop();
    }

    gameSprites.draw();
  }
}