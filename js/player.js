class Player {
  constructor(x = 40, y = 650){
    this.position = { x, y }; //shorthand for x: x and y: y
  }

  preload(){

  }

  setup(){
    this.position = {
      x: 40,
      y: height - 100 //need to declare here to be able to use height
    }
  }

  draw(){
    this.movement();
    rect(this.position.x, this.position.y, 40, 40);

  }

  //moves character left and right with arrow keys and wasd, and updates camera to follow
  movement(){
    if(keyIsDown(LEFT_ARROW) || keyIsDown(KEY.A)){
      this.position.x-=3;
    } else if(keyIsDown(RIGHT_ARROW) || keyIsDown(KEY.D)){
      this.position.x+=3;
    }

    updateCamera(this.position.x);
  }
}