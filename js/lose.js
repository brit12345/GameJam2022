class Lose {
  constructor(){
    this.mainMenuBtn;
    this.loseSprites; //there is only one instance of Lose, so can have it in the class
                      //could make it static?
    this.zeroPos;
    this.setupCall = false;
  }

  setup(){
    this.loseSprites = new Group();
    
  }

  createMainMenuBtn(){
    this.mainMenuBtn = createSprite(width/2, height/2, 200, 50);
    this.mainMenuBtn.shapeColor = "grey";
    this.mainMenuBtn.setCollider("rectangle", 0, 0, 150, 50);
   
    this.loseSprites.add(this.mainMenuBtn);
  }

  draw(){
    if(this.setupCall == false){
      this.createMainMenuBtn();
      this.setupCall = true;
    }
    this.mainMenuBtn.onMouseReleased = () => this.buttonPressed(); 

    this.loseSprites.draw();

    this.drawLoseText();
    this.drawButtonLabel();
  }

  drawLoseText(){
    push();
      textAlign(CENTER, CENTER);
      fill(255);
      textSize(40);
      text("You Lose", width/2, height/4);
      textSize(20);
      text("Retry if you think you're good enough...", width/2, height/4 + 50);
    pop();
  }

  drawButtonLabel(){
    push();
      fill(255);
      textSize(34);
      textAlign(CENTER, CENTER);
      text("Main Menu", this.mainMenuBtn.position.x, this.mainMenuBtn.position.y);
    pop();
  }

  buttonPressed(){
    this.setupCall = false;
    this.mainMenuBtn.remove();
    currentScreen = MENU;
    location.reload();

  }
}