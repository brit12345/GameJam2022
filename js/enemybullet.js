
class EnemyBullet {

  constructor(x, y){
    this.damage = 10;
    this.sprite;
    this.sprite = createSprite(x, y, 4, 4);
    this.sprite.setCollider("rectangle", 0, 0, 4, 4);
    this.sprite.life = 200;
  }

  shoot(angle, speed){
    this.sprite.setSpeed(speed, angle);
  }

}