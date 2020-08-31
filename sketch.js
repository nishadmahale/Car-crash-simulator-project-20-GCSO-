var car,wall;
var speed,weight;



car=createSprite(50,200,50,50);
wall=createSprite(1500,200,60,height/2);

car.velocityX=speed;




function draw(){
    speed=random(55,90);
    weight=random(400,1500);
    car.colide(wall);
    if(wall.x-car.x<(car.width+wall.width)/2) {
        var damage=createSprite(180,200,20,20);
        damage=0.5*weight*speed*speed/22500;
        car.velocityX=0;
    }
    if(damage<100){
         car.shapeColour="Green";
    }
   if (damage > 100 && damage <180){
    car.shapeColour="Yellow";
   }
    if(damage>180){
    car.shapeColour="Red";
}

drawSprites();
}