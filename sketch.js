const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,paper;
var boxBase,boxBottomBody,boxleftBody;
var boxleftSprite,boxRightBody,boxRightSprite;
var boxPosition,paperImage,boxBaseImage;

function preload(){
  boxBaseImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
paper= new Paper(100,500,50,100,500);
paper.scale=0.2;

ground = new Ground(0,height,3200,55);

boxleftSprite=createSprite(820,590,20,170);
boxleftSprite.shapeColor=(0);

boxleftBody=Bodies.rectangle(830,600,20,100,{isStatic:true} );
World.add(world,boxleftBody);

boxBase=createSprite(760,580,125,20);
boxBase.shapeColor=(0);
boxBase.addImage(boxBaseImage);
boxBase.scale=0.6;

boxBottomBody=Bodies.rectangle(760,580,125,20,{isStatic:true} )
World.add(world,boxBottomBody);

boxRightSprite=createSprite(700,590,20,170);
boxRightSprite.shapeColor=(0);

boxRightBody=Bodies.rectangle(700,600,20,130,{isStatic:true} );
World.add(world,boxRightBody)

	Engine.run(engine);
  
}

function draw() {
  background("white");

  drawSprites();
  paper.display();
  //box.display();
  ground.display();
  boxleftSprite.display();
  boxRightSprite.display();
  boxBase.display();

}

function keyPressed() {
	
 if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body, paper.body.position,{x:120,y:-110}) 
  }
}


