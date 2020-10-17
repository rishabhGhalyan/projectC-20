var car,speed;
var wall,weight;


function setup() {
  createCanvas(innerWidth,innerHeight);
  car = createSprite(innerWidth-700,innerHeight-400, 80, 80);
  car.shapeColor="white",
  wall = createSprite(innerWidth-100,innerHeight-400,50,height/2);
  wall.shapeColor="BLUE"
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(0);
  car.collide(wall)  
  
  car.velocityX = speed;

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180){
      car.shapeColor="red"
    }
  if(deformation<180 && deformation>100){
    car.shapeColor="yellow"
  }

  if(deformation<100){
    car.shapeColor="green"
  }
  }
  drawSprites();
}