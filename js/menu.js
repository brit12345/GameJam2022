//basic menu with only a play button. Can customise more when we know the theme
class Menu {
  constructor(){
    this.playButton;
  }

  setup(){
    this.playButton = createSprite(width/2, height/2, 150, 50);
    this.playButton.shapeColor = "grey";
    this.playButton.setCollider("rectangle", 0, 0, 150, 50);
  }

  draw(){
    this.playButton.onMousePressed = this.onPlayClicked;
    this.drawTitle();
    drawSprites();

    //to draw on top of sprites
    this.drawButtonLabel();
  }

  onPlayClicked(){
    currentScreen = GAME; //change current screen when play clicked
  }

  drawButtonLabel(){
    push();
      fill(255);
      textSize(34);
      textAlign(CENTER, CENTER);
      text("Play", this.playButton.position.x, this.playButton.position.y);
    pop();
  }

  drawTitle(){
    push();
      textAlign(CENTER, CENTER);
      fill(255);
      textSize(40);
      text("Our Game", width/2, height/4);
    pop();
  }

}