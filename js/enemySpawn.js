
class EnemySpawn {

  constructor(){
    this.sprite;
    this.sprite = createSprite(500, 500, 30, 30);
    this.sprite.setCollider("rectangle", 0, 0, 30, 30);
    gameSprites.add(this.sprite);
    enemies.add(this.sprite);
  }

  checkForSpawn(){
      enemy.spawnTimer++;
      if(enemy.spawnTimer >= enemy.spawnDuration){
        this.spawn();
        enemy.spawnTimer = 0;
      }
    }
  
    spawn(){
      let enemySpawn = new Enemy(this.sprite.position.x, this.sprite.position.y);
    
  }
}