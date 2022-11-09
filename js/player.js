class Player {
  constructor(){
    this.sprite;
    this.health = 100;
    this.maxHealth = 100;
    this.walkSpeed = 3;
    this.shootSpeed = 5;
    this.forwardAngle = 0;
    this.cooldownTimer = 500;
    this.cooldownDuration = 100; //change this for duration between bullets
    this.blocking = false;
  }

  preload(){

  }

  setup(){
    this.sprite = createSprite(40, height - 80, 40, 40);
    
    gameSprites.add(this.sprite);
  }

  draw(){
    this.movement();
    this.checkForShoot();
    this.drawHealthbar();
    this.blockingCheck();
    this.drawTempShield();

    if(this.health <= 0){
      this.die();
    }
  }

  //moves character left and right with arrow keys and wasd, and updates camera to follow
  movement(){
    if(keyIsDown(LEFT_ARROW) || keyIsDown(KEY.A)){
      this.sprite.position.x -= this.walkSpeed;
      this.forwardAngle = 180;
    } else if(keyIsDown(RIGHT_ARROW) || keyIsDown(KEY.D)){
      this.sprite.position.x += this.walkSpeed;
      this.forwardAngle = 0;
    }

    updateCamera(this.sprite.position.x);
  }

  checkForShoot(){
    this.cooldownTimer++;
    if(mouseIsPressed && (this.cooldownTimer >= this.cooldownDuration/this.shootSpeed) && this.blocking == false){
      this.shoot();
      this.cooldownTimer = 0;
    }
  }

  shoot(){
    let bullet = new Bullet(this.sprite.position.x, this.sprite.position.y);
    bullet.shoot(this.forwardAngle, this.shootSpeed); //shoot forward
  }

  blockingCheck(){
    if(keyIsDown(KEY.SHIFT)){
      this.blocking = true;
    } else {
      this.blocking = false;
    }
  }

  die(){
    camera.position.x = originalCamPos.x;
    camera.position.y = originalCamPos.y;
    currentScreen = LOSE;
  }

  drawTempShield(){
    if(this.blocking){
      push();
        noStroke();
        fill(50, 50, 230, 100);
        for(let i = 0; i < 4; i++){
          ellipse(this.sprite.position.x, this.sprite.position.y, 20*i, 20*i);
        }
      pop();
    }
  }

  takeDamage(amt){
    this.health -= amt;
  }

  drawHealthbar(){
    push();
      const OFFSET_Y = 350;
      const OFFSET_X = 500;
      fill("red");
      textSize(20);
      textAlign(RIGHT, CENTER);
      text(this.health, camera.position.x - OFFSET_X - 8, camera.position.y - OFFSET_Y + 15)
      fill("red");
      const HBAR_MAX_W = 400;
      rect(camera.position.x - OFFSET_X, camera.position.y - OFFSET_Y, map(this.health, 0, this.maxHealth, 0, HBAR_MAX_W), 30);
      noFill();
      stroke("white");
      strokeWeight(3);
      rect(camera.position.x - OFFSET_X, camera.position.y - OFFSET_Y, HBAR_MAX_W, 30);
    pop();
  }
}