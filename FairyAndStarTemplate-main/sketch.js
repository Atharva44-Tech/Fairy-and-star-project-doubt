var fairy1,fairy1Image;
var fairy2,fairy2Image;
var star,starImage;
var starnight,starnightImage
var rect



function preload(){
   //preload the images here
  starnightImage=loadImage("images/starnight.png");
  fairy1Image=loadImage("images/fairy1.png");
  fairy2Image=loadImage("images/fairy2.png");
  starImage=loadImage("images/star.png");  
}

function setup() {
	createCanvas(800, 800);
  starnight=createSprite(0,0,800,750);
  starnight.addImage(starnightImage);
  starnight.scale=0.9

  fairy1=createSprite(200,300,5,5);
  rect=createSprite(0,700,2000,10)
  rect.visible=false;

star=createSprite(400,200,5,5);
star.addImage(starImage)
star.scale=0.3

var star={
  restitution:1,
  friction:0.3,
  density: 0.7
 }

}

function draw() {
  background("black");
 drawSprites();

 if (keyWentDown("k")){
  fairy1.addImage(fairy1Image);
  fairy1.scale=0.1
  fairy1.velocityX=2; 
}

if (keyWentDown("m")){
  fairy1.addImage(fairy1Image);
  fairy1.scale=0.1
  fairy1.velocityX=-2; 

star.velocityY=2;
}


Matter.star.setStatic(star, true);

}
