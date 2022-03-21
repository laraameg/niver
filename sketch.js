const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img, polygonn, vela1,gif, g, niver;
function preload(){
  polygon_img=loadImage("polygon.png");
  gif = createImg('116.gif');
  niver = loadSound("niver.mp3");
  
}
function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(300, 300, 250, 250);

  gif.position(150, 100)
  gif.size(300, 200)

  polygonn = new Polygon(50,200,40);
  estilingue = new Estilingue(polygonn.body, {x:170, y:130});
  vela1 = new Block(300, 200, 70, 70);

}
function draw() {
  gif.hide()
  background("lightblue"); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();

  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  
  polygonn.display();
  estilingue.display();
  vela1.display();

 if (mouseIsPressed) {
  Matter.Body.setPosition(polygonn.body, {x:mouseX, y: mouseY});
}

if (vela1.body.position.x>600) {
  niver.play();
  gif.show();
  ground.body.position.x = 1000
}

if (keyDown('space')) {
  window.location.reload();
}

drawSprites();
}

function mouseReleased() {
estilingue.voar();
}

function keyPressed() {
  if (keyCode === 32) {
    estilingue.ligar();
  }
}
