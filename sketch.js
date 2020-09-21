var wall, thickness
var speed, weight,bullet;

function setup() {

  createCanvas(1600,400);

  speed=random(223, 321);
  thickness=random(22, 83);
  weight=random(30, 52);

  car=createSprite(50, 200, 50, 30);
  car.shapeColor=color("red");

  wall=createSprite(1200, 200, thickness,height/2);
  wall.shapeColor=color(80, 80, 80);

  car.velocityX=speed;
  
}

function draw() {
  background("black");  
  car.collide(wall);

  damage=0.5*bulletweight*bulletspeed*bulletspeed/(thicknessofwall*thicknessofwall*thicknessofwall);

  if (wall.x-car.x<(car.width=wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 *weight *speed *speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation < 180 && deformation > 100)
    { 
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
   
  drawSprites();
}
function hascollided(lbullet,lwall)
   {  
   bulletRightEdges=lbullet.x + lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   
   return false;
   }
   
   if (hascollided(bullet,wall))
   {
   bullet,velocityx=0;
   var damage=0.5 * weight * speed* speed/(thickness * thickness * thickness);

   if (damage>10)
   {
     wall.shapeColor=color(255,0,0);
   }
   if (damage<10)
   {
     wall.shapeColor=color(0,255,0);
   }
   }


