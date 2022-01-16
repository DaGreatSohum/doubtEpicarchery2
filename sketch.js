const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var bow

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherImg= loadImage("./assets/playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  player=Bodies.rectangle(420,250,50,100, options)
  World.add(world,"player")
  bow=new PlayerArcher(450,300,50,50)
}

 function draw() {
   background(backgroundImg);
   Engine.update(engine);
   image(playerimage,player.position.x, player.position.y, 50,100);
   bow.display ()
   /*textAlign("center");
   textSize(40);
   textFont("Times New Roman")
   text("EPIC ARCHERY", width / 2, 100);
 
 */ 
}
