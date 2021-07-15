var runner;
var path;
var runnerImage;
var pathImage;
var leftWall;
var rightWall;
function preload(){
  //pre-load images
  pathImage=loadImage("path.png");
  runnerImage=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,400,400);
  path.addImage(pathImage);
  runner=createSprite(100,370,30,50);
  runner.addAnimation("running",runnerImage);
  runner.scale=0.08;
  leftWall=createSprite(10,0,100,800);
  rightWall=createSprite(410,0,100,800);
  edge=createEdgeSprites();

  path.velocityY = 4;

}

function draw() {
  background(0);
  runner.x=World.mouseX;
   runner.collide(edge[3]);  
  runner.collide(rightWall);
  runner.collide(leftWall);
  if(path.y>400){
  path.y=200;

  }
  drawSprites();

}
