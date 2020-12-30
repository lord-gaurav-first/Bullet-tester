var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(windowWidth, 400);

  thickness= random(22, 83);
  speed= random(223, 321);
  weight= random(30, 52);

  bullet= createSprite(200, height/2, 40, 15);
  bullet.velocityX= speed;

  wall= createSprite(width-200, height/2, thickness, height/2);

  damage= (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
}

function draw() {
  background(0);

  drawSprites();

  if (isTouching(bullet, wall)){
    bullet.velocityX= 0;
    if (damage< 10){
      bullet.shapeColor= "green";
    }else if (damage> 10){
      bullet.shapeColor= "red";
    }
  }
}
