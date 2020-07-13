var car,wall;
var speed,weight;

function setup() {
createCanvas(1600,400);
speed = random;
weight = random;
car = createSprite(50,200,50,50);
wall = createSprite(1500,200,60,height/2);
car.velocityx = speed;
}

function draw() {
background(255,255,255);  
if(wall.x-car.x < (car.width)/2){
    car.velocityx = 0;
    var deformation = 0.5 * weight * speed * speed / 22509
    
    if(deformation>180){
    car.shapecolor = color(255,0,0)
    }
    
    if(deformation<180 && deformation>100){
    car.shapecolor = color(230,230,0)
    }
    
    if (deformation<100){
    car.shapecolor = color(0,255,0)
    }
    } 
    
drawSprites();
}