var thickness,wall;
var speed,weight,bullet;


function setup() {
  createCanvas(1600,400);


  thickness=random(22,83);
 
  
  speed=random(225,325);
  weight=random(30,52);

  bullet=createSprite(50,200,50,5);
  

  wall=createSprite(1200,200,thickness,height/2);


}

function draw() {
  background(0);  

  bullet.velocityX=speed;
   
  if (hasCollided(bullet,wall))
  {  bullet.velocityX=0;


    var damage=0.5*speed*speed*weight/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color("red");
    }
    if(damage<10)
    {
      wall.shapeColor=color("green");
    }
  }
  drawSprites();
}



function hasCollided(lbullet,lwall)
  {
    
   var bulletRightEdge= lbullet.x +lbullet.width;

   var wallLeftEdge=lwall.x;

    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
  
    }
    return false;
  }