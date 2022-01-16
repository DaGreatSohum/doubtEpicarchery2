class PlayerArcher {
 


  constructor(x, y, width, height, angle) {
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.bow_image = loadImage("assets/playerArcher.png"); 

    this.bow=Bodies.rectangle(x,y,w,h)
    World.add(world, this.bow)
      }
  



  display() {
     var angle=this.body.angle;
     push();
     translate(this.x, this.y);
     rotate(this.angle);
     imageMode(CENTER)  ;
     image(this.bow_image,0,0, this.width, this.height);
     pop();
     console.log(this.angle)
     if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
       this.angle += 1;
     }
 
     if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
       this.angle -= 1;
     } 
    }
 }
  



