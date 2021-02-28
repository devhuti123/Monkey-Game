var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
  obstacleGroup= new Group();
}

function setup() {
  createCanvas(670, 400);
  score=0
  survivalTime=0
  
  ground=createSprite(0,400,1500,20);
  
   monkey=createSprite(90,370,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  score=0;

}

function draw() {
  background("skyblue");
  
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  ground.velocityX = -10;
  ground.x = ground.width/2;
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
 
  fill("white") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50)
  
  fruits();
  stones();
  
 drawSprites();
}

function fruits(){
  if(World.frameCount%200===0){
  banana=createSprite(670,200,10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-4
  FoodGroup.add(banana)
}
  }
function stones(){
 
  if(World.frameCount%300===0){
  obstacle=createSprite(450,355,10,10);
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-5
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)

}
  }