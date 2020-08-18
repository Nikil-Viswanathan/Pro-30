const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "onsling";

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(700,320,70,70);
    box2 = new Box(780,320,70,70);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(780,240,70,70);
    
   

    box5 = new Box(740,200,70,70);
    box6 = new Box(850 , 350, 70,70);
    box7 = new Box(630,350,70,70);
    box8 = new Box(740 , 150 , 70,70);
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    box3.display();
    box4.display();
   

    box5.display();
  box6.display();
    box7.display();
    box8.display();

  
    
    bird.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body, {x:200 , y:50});
        gameState = "onsling"
    }
}
