
class Enemy {
  
    constructor(){
      this.sprite;
      this.alive = true;
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
      this.sprite.health = 30; //health needs to be attached to sprite for access in takeDamage function
      this.sprite.setCollider("rectangle",0 ,0, 40,40);
      this.sprite.takeDamage = function (amt){
        this.health -= amt; //in here, "this" refers to the sprite, not the object
      }
      this.sprite.debug=true;
      gameSprites.add(this.sprite);
      enemies.add(this.sprite);
    }
  
    draw(){
      this.movement();
      this.checkForShoot();
     
      if(this.sprite.health <= 0){
        this.die();
      }
    }
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


  checkForShoot(){
    this.cooldownTimer++;
    if(this.cooldownTimer >= this.cooldownDuration/this.shootSpeed && (this.alive)){
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
    this.alive = false;
  }
}