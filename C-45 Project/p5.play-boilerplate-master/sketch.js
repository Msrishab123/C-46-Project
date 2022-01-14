var bg,bgI;
var runner,runnerI, runnerR , runnerJ;
var ground, invisibleGround;

var obstacleGroup, obstacle1, obstacle2, obstacle3;

function preload(){
bgI = loadImage("pics/forest.jpg");
runnerR = loadAnimation("pics/Run1.png","pics/Run2.png","pics/Run3.png","pics/Run4.png","pics/Run5.png","pics/Run6.png","pics/Run7.png","pics/Run8.png");
runnerI = loadAnimation("pics/Idle1.png");
runnerJ = loadAnimation("pics/Jump1.png","pics/Jump2.png","pics/Jump3.png","pics/Jump4.png","pics/Jump5.png","pics/Jump6.png","pics/Jump7.png","pics/Jump8.png","pics/Jump9.png","pics/Jump10.png","pics/Jump11.png","pics/Jump12.png");
obstacle1 = loadImage("pics/wood.png");
obstacle2 = loadImage("pics/rock.png");
obstacle3 = loadImage("pics/grass.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  ground = createSprite(200,180,20,50);
  ground.x = ground.width/2;
  
  bg = createSprite(displayWidth/2-20,displayHeight/2-40, 20, 20);
  bg.addImage(bgI);
  //bg.x = bg.width /2;
  bg.velocityX = -4; 
  bg.scale = 1.5;

  runner = createSprite(50,displayHeight - 250,50,50);
  runner.addAnimation("runnerI", runnerI);
  runner.addAnimation("run2", runnerR);
  runner.scale = 0.3;
  runner.setCollider("rectangle",0,0,300,300);
  runner.debug = true;

  invisibleGround = createSprite(751,591,1600,10);
  invisibleGround.visible = false;

  obstacleGroup = new Group();
}

function draw() { 
  background(0);
  
  if (bg.x < 450) {
bg.x = bg.width / 1.5;
}
  if(keyDown("space")){
    runner.changeAnimation("run2");
  }

  runner.collide(invisibleGround);

  ground.velocityX = 0;
  runner.velocityY = 0

  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(900,575,10,40);
    obstacle.debug = true;
    obstacle.velocityX = -3;

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1 : obstacle.addImage(obstacle1);
      obstacle.scale = 0.6;
      break;
      case 2 : obstacle.addImage(obstacle2);
      obstacle.scale = 0.2;
      break;
      case 3 : obstacle.addImage(obstacle3);
      obstacle.scale = 0.2;
      break; 
    }
  }
}