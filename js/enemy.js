
class Enemy {
  
    constructor(){
      this.sprite;
      this.health = 30;
      this.walkSpeed = 1.5;
      this.forwardAngle = 180
      this.shootSpeed = 7;
      this.cooldownTimer = 2000;
      this.cooldownDuration = 600;
      this.spawnTimer = 1000
      this.spawnDuration = 1000
    }
  
    preload(){
  
    }
  
    setup(){
      
      this.sprite = createSprite(500, height-80, 40, 40);
      this.sprite.setCollider("rectangle",0 ,0, 40,40)
      this.sprite.debug=true;
    }
  
    draw(){
      drawSprites();
      this.movement();
      this.checkForShoot();
      this.checkForSpawn();
     
    }
  
   
    movement(){
      if (player.sprite.position.x >= this.sprite.position.x) {
          
          this.sprite.position.x += this.walkSpeed
          this.forwardAngle = 0;
      } else if (player.sprite.position.x <= this.sprite.position.x) {
   
        this.sprite.position.x -= this.walkSpeed
        this.forwardAngle = 180;
        
        
    }
    }

    checkForSpawn(){
      this.spawnTimer++;
      if(this.spawnTimer >= this.spawnDuration/this.walkSpeed){
        this.spawn();
        this.spawnTimer = 0;
      }
    }
  
    spawn(){
      //let Enemy = new Enemy(this.sprite.position.x, this.sprite.position.y);
      //Enemybullet.shoot(this.forwardAngle, this.shootSpeed); //shoot forward
      this.sprite = createSprite(500, height-80, 40, 40);
    }

    
    checkForShoot(){
      this.cooldownTimer++;
      if(this.cooldownTimer >= this.cooldownDuration/this.shootSpeed){
        this.shoot();
        this.cooldownTimer = 0;
     }
   }
  
    shoot(){
      let Enemybullet = new EnemyBullet(this.sprite.position.x, this.sprite.position.y);
      Enemybullet.shoot(this.forwardAngle, this.shootSpeed); //shoot forward
    }
  
    die(){
      this.sprite.remove();
    }
  
    takeDamage(amt){
      this.health -= amt;
    }
  }