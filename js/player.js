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
    if(mouseIsPressed && (this.cooldownTimer >= this.cooldownDuration/this.shootSpeed)){
      this.shoot();
      this.cooldownTimer = 0;
    }
  }

  shoot(){
    let bullet = new Bullet(this.sprite.position.x, this.sprite.position.y);
    bullet.shoot(this.forwardAngle, this.shootSpeed); //shoot forward
  }

  die(){
    camera.position.x = originalCamPos.x;
    camera.position.y = originalCamPos.y;
    //console.log(camera.position);
    currentScreen = LOSE;
  }

  takeDamage(amt){
    this.health -= amt;
  }
}