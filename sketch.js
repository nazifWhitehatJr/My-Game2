var monsterGroup;
var Hero;
var HeroImage;
var MonsterImage;
var Forest, ForestImage;

var w = 185;

function preload(){
   HeroImage = loadImage("clipart4823130.png");
   MonsterImage = loadImage("pngwing.com.png");
   ForestImage = loadImage("Forest.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(windowWidth,windowHeight);
 
  Forest = createSprite(width/2,height/2,width,height);
  Forest.addImage(ForestImage);
  Forest.velocityX = -2;
  Forest.x = Forest.width /2;


  monsterGroup = new Group();
  
  Hero = createSprite(width -50,height/2,70,70);
  Hero.shapeColor = "red"
  Hero.addImage(HeroImage);
  Hero.scale = 0.2
  edges = createEdgeSprites();

  }

  

// function to display UI
function draw() {
  background(0);
  if (Forest.x < 0 ) {
    Forest.x = Forest.width / 2;
  }
  
  createMonster();

  Hero.bounceOff(edges);

  drawSprites();
  fill("white")
  rect(100,50,200,50);
  fill("green")
  rect(100,50,w,50);


  if(keyDown("up")){
    Hero.y -= 20;
  }

  if(keyDown("down")){
    Hero.y += 20;
  }

  if(keyDown("right")){
    Hero.x += 20;
  }

  if(keyDown("left")){
    Hero.x -= 20;
  }
  if(Hero.isTouching(monsterGroup)){
    w -= 5;
  }
  }

  function createMonster(){
  
  if(frameCount % 130 === 0){
   var monster = createSprite(0,50,50,50);
   
   monster.y = random(350, height-250);
   monster.velocityX = 15;
   monster.lifetime = width/15;
   monsterGroup.add(monster);
   monster.addImage(MonsterImage);
   monster.scale = 0.2
   
  }

  }

