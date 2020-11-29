const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,paper,ground;
var engine,world;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(310,450,70);
	ground = new Ground(350,670,3600,20);
	
	dustbin = new Dustbin(1200,650);
	var render = Render.create({
		element: document.body,engine:engine,
		options:{width:1600,height:700,wireframes: false}
	})
	Engine.run(engine);
	Render.run(render);
    
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  dustbin.display();
  //dustbin2.display();
  //dustbin3.display();
  paper.display();

}
function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x: 130,y:-145});
	
	
	  }
}



