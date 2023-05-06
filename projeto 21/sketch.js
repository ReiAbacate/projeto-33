
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground, lside, rside;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	var balls_options={
		isStatic:false,
		restituition:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260, 100, 20, balls_options);
	World.add(world, ball);

	ground = new Ground(width/2, 670, width, 20);
	lside = new Ground(1100, 600, 20, 120);
	rside = new Ground(1400, 600, 20, 120);
}


function draw() {
  rectMode(CENTER);
  background(0);


    ellipse(ball.position.x, ball.position.y, 20, 20);
	ground.show();
	lside.show();
	rside.show();
	
	drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:90, y:-80});

	}


}