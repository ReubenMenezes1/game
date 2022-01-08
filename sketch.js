
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,hero,heroImg,king,kingImg,guard,guardsGroup,guardImg;
function preload(){
   bg = loadImage("assets/bg.jpg");
  heroImg = loadImage("assets/hero.png");
  kingImg = loadImage("assets/king.png");
  guardImg = loadImage("assets/guards.png");
}

function setup() {
  createCanvas(1500,775);
hero = createSprite(1400,375);

  hero.addImage(heroImg);
  hero.scale = 0.15;
  king = createSprite(125,525);

king.addImage(kingImg);
king.scale = 0.3;
guardsGroup = new Group();
guard = createSprite(100,375);
guard.addImage(guardImg);
guard.scale = 0.5;

}


function draw() 
{
  background(bg)
  drawSprites();
}

