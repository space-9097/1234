var path
var pathImg
var boy
var running_boy


function preload(){
  //pre-load images
  running_boy = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  boy.createSprite(200,390,50,50);
  boy.addAnimation("running", running_boy);
  edges = createEdgeSprites();

  boy.scale = 0.5;
  path=createSprite(200,200)
  path.addImage(pathimg)
  path.velocityY=4;
  path.scale=1.2;

}

function draw() {
  background("blue");

  console.log(path.y)
  if (path.y > 400 ){
    path.y = height/2;
  }

  


  drawSprites();
}
