const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var umbrella;
var drop = [];
// var light, light1, light2, light3, light4;
var lightning;
var rand;

function preload() {
  // light1 = loadImage("images/light1.png");
  // light2 = loadImage("images/light2.png");
  // light3 = loadImage("images/light3.png");
  // light4 = loadImage("images/light4.png");
}

function setup() {
  createCanvas(500, 600);
  engine = Engine.create();
  world = engine.world;
  lightning = new Lightning(250, -100, 1000, -100);
  umbrella = new Umbrella(250, 400, 50);

  Engine.run = engine;
  for (var i = 0; i < 200; i = i + 1) {
    drop.push(new Drops(random(0, 500), random(0, 300), 5));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  for (var i = 0; i < drop.length; i = i + 1) {
    drop[i].display();
    drop[i].update();
  }

  umbrella.display();
  lightning.display();
  // light = createSprite(250, 50, 20, 80);
  // if (frameCount % 60 === 0) {
  //   rand = Math.round(random(1, 4));
  //   console.log(rand);
  // }
  // switch (rand) {
  //   case 1:
  //     light.addImage(light1);
  //     break;
  //   case 2:
  //     light.addImage(light2);
  //     break;
  //   case 3:
  //     light.addImage(light3);
  //     break;
  //   case 4:
  //     light.addImage(light4);
  //     break;
  //   default:
  //     break;
  // }
}
