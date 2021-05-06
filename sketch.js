const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[];
var divisions=[];
var plinkos=[];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

	engine = Engine.create();
	world = engine.world;

  ground=new Ground(240,780,480,20);

  for(var k =0; k <=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}

function draw() {
  background('black');  
  Engine.run(engine);
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2+1-0),10,10));

  }

  drawSprites();
}