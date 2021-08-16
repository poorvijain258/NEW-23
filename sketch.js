const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobobject;
var rope;

//Create multiple bobs, mulitple ropes varibale here
bobobject1=newBob(325,346);
bobobject2=newBob(400,450);
bobobject3=newBob(567,580);
bobobject4=newBob(532,634);
bobobject5=newBob(550,400);

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
      rope1 = new rope(bobobject1,roof,-80,0);
	  rope2 = new rope(bobobject2,roof,-100,0);
	  rope3 = new rope(bobobject3,roof,0,0);
	  rope4 = new rope(bobobject4,roof,+80,0);
	  rope5 = new rope(bobobject5,roof,-80,0);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  display();
    rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
	bobobject1.display();
	bobobject2.display();
	bobobject3.display();
	bobobject4.display();
	bobobject5.display();

	
  //create ellipse shape for multiple bobs here
  ellipse();
   bobs.show();
  bobobject1.show();
  bobobject2.show();
  bobobject3.show();
  bobobject4.show();
  bobobject5.show();
}
 


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
if(keyCode==="UPARROW"){
	Matter.body.applyForce(bobobject1.body,bobobject1.position,{x:234,y:4});
}