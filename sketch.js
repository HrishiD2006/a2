
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject,wallobj;	
var world;
var launcher;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(1200,100,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	launcher=new Launcher(paperObject.body,{x:1200,y:100})
	//Create a Ground
	wallobj=new wall(1400,330,30,670)

	
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  wallobj.display();
  launcher.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode ===RIGHT_ARROW ) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
	  if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:-145});

    
  	}
	  if (keyCode === LEFT_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-130,y:-145});

    
  	}

}
function mouseDragged(){

	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY})
	
	}
	function mouseReleased(){
	
	
	launcher.fly();
	
	
	}




