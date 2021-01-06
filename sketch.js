const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;
var box1;
var box2;
var box3;
var boximage;

function preload()
{
	boximage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1100, 600);


	engine = Engine.create();
	world = engine.world;



	 paper = new Paper(300, 100, 70, 70);
	 box1 = new Bin(900,500,15,170);
	box3 = new Bin(1050,500,15,170);
	 ground = new Ground(width/2, 593, 1600, 20);

	Engine.run(engine);
  Engine.update(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
 ground.display();
 box3.display();
 box1.display();

 image(boximage,880,400,200,200);
  

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}