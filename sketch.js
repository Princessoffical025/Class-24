const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var pig1;
var roof1;
var box3,box4,pig2,roof2,roof3,roof4,box5;
var bird1;
function setup(){
    var canvas = createCanvas(1820,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,650,70,70);
    box2= new Box(920,650,70,70);
    box3= new Box(700,620,70,70);
    box4= new Box(920,620,70,70);
    box5=new Box(810,590,70,70);
    floor = new ground(900,680,1820,20);
    pig1= new Pig(810,650);
    pig2=new Pig(810,625);
     roof1=new Roof(810,640,300,PI/2);
    roof2=new Roof(810,610,300,PI/2);
    roof3=new Roof(760,590,150,PI/7);
    roof4=new Roof(870,590,150,-PI/7);
    bird1=new Bird(100,100);
    console.log(box1)
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   floor.display();
   pig1.display();
   pig2.display();
   roof1.display();
   roof2.display();
   roof3.display();
   roof4.display();
   bird1.display();
}