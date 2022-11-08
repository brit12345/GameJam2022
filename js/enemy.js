class Enemy {
    constructor(x = 500, y = 650){
      this.position = { x, y }; 
    }
  
    preload(){
  
    }
  
    setup(){
      this.position = {
        x: 500,
        y: height - 120 
      }
    }
  
    draw(){
     // this.movement();
      rect(this.position.x, this.position.y, 60, 60);
  
    }
  
   
   // movement(){
      
   // }
  }