//basic menu with only a play button. Can customise more when we know the theme
class Menu {
  constructor(){
    this.playButton;
    this.menuSprites;
    this.setupCall = false;
  }

  setup(){
    
  }

  draw(){
    if(this.setupCall == false){ //need to destroy and recreate the button because even
      this.createPlayButton();   //when it isn't being drawn, the click event fires
      this.setupCall = true;
    }

    this.playButton.onMousePressed = () => this.onPlayClicked();

    this.drawTitle();

    this.menuSprites.draw();

    //to draw on top of sprites
    this.drawButtonLabel();
  }

  createPlayButton(){
    this.playButton = createSprite(width/2, height/2, 150, 50);
    this.playButton.shapeColor = "grey";
    this.playButton.setCollider("rectangle", 0, 0, 150, 50);
    this.menuSprites = new Group();
    this.playButton.debug = true;
   
    this.menuSprites.add(this.playButton);
  }

  onPlayClicked(){
    this.setupCall = false; //reset setup for when go back to this screen
    currentScreen = GAME; //change current screen when play clicked
    this.playButton.remove();
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