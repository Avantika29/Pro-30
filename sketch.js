const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var block1;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(320,350,280,15);

  block1 = new Block(230,340,30,40);
  block2 = new Block(260,340,30,40);
  block3 = new Block(290,340,30,40);
  block4 = new Block(320,340,30,40);
  block5 = new Block(350,340,30,40);
  block6 = new Block(380,340,30,40);
  block7 = new Block(410,340,30,40);

   
  block8 = new Block(260,260,30,40);
  block9 = new Block(290,260,30,40);
  block10 = new Block(320,260,30,40);
  block11= new Block(350,260,30,40);
  block12 = new Block(380,260,30,40);

 
  block13 = new Block(290,180,30,40);
  block14 = new Block(320,180,30,40);
  block15= new Block(350,180,30,40);

  block16 = new Block(320,100,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Sling(this.polygon,{x : 100, y : 200})


 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();

 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();

 block13.display();
 block14.display();
 block15.display();


 block16.display();

 
 slingShot.display();


 //console.log(block16.y)


  drawSprites();
}