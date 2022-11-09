
class EnemySpawn {

    constructor(x, y){
      this.damage = 10;
      this.sprite;
      this.sprite = createSprite(x, y, 30, 4);
      this.sprite.setCollider("rectangle", 0, 0, 30, 4);
      this.sprite.life = 200;
      gameSprites.add(this.sprite);
      enemies.add(this.sprite);
    }

    checkForSpawn(){
        this.spawnTimer++;
        if(this.spawnTimer >= this.spawnDuration/this.walkSpeed){
          this.spawn();
          this.spawnTimer = 0;
        }
      }
    
      spawn(){
        let enemySpawn = new Enemy(this.sprite.position.x, this.sprite.position.y);
      
    }
  }