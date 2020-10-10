var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(400, 600, 80, 50);

  movingRect.velocityY = -2;
  fixedRect.velocityY = 2;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);   
  bounceOff(movingRect,fixedRect);


  drawSprites();
}

function bounceOff(object1,object2){
  if(object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.x - object2.x < object1.width/2 + object2.width/2){
      object2.velocityX = 0 - object2.velocityX;
      object1.velocityX = 0 - object1.velocityX;
    }
    if(object2.y - object1.y < object2.height/2 + object1.height/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2){
      object2.velocityY = 0 - object2.velocityY;
      object1.velocityY = 0 - object1.velocityY;
    }
}
 