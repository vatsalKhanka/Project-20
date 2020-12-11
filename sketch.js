var car,wall,speed,weight;
function setup() {
  createCanvas(3000,400);

  speed = random(45,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall=createSprite(1000,200,60,height/2);
  wall.shapeColor = color(80,80,80);
 
  car.velocityX=speed;
}


function draw() {
  background("black");  
  
  drawSprites();
  if (wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0;
    
    var deformation=0.5*speed*speed*weight/22500;
    console.log(deformation);
    if (deformation>180) {
      car.shapeColor=color(255,0,0);
    } 
     if (deformation<180&&deformation>100) {
      car.shapeColor = color(230,230,0);
    } 
    
  if (deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }
}