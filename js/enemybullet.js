
class EnemyBullet {

  constructor(x, y){
    this.damage = 10;
    this.sprite;
    this.sprite = createSprite(x, y, 30, 4);
    this.sprite.setCollider("rectangle", 0, 0, 30, 4);
    this.sprite.life = 200;
    gameSprites.add(this.sprite);
    enemybullets.add(this.sprite);
  }

  shoot(angle, speed){
    this.sprite.setSpeed(speed, angle);
  }

}