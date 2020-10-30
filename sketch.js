
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}
function setup() {
 monkey=createSprite(80,315,20,20) ;
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-1;
  ground.X=ground.width/2;
  console.log(ground.x); 
  
  banana=createSprite(100,200,20,20);
  banana.addImage("banana",bananaImage);
  banana.scale=0.2;
  
  obstacle=createSprite(100,350,20,20);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale;
  
}
function draw() {
background("black");
drawSprites() ;
}

var survivalTime=0;
stroke("white");
textSize(20);
fill("white");
text("score: " + score,500,50);

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate());
text("survival Time:" + survivalTime,100,50);



