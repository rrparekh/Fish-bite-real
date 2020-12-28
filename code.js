var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bc92fce9-c92c-4fb5-9741-9bdb51bad95c","4c99e81f-f441-4ff6-998b-a6f89ac5a925","c4c07695-ae23-49fe-98eb-f8800405a0e9","9c4455ed-bb71-45d5-9065-41f18e2f511c","fa15e67f-f7b7-417d-83f5-d496883ee8b5","f6c50570-f8c6-4f84-8d63-09a8152caf0a","d68d57af-69e6-44ea-ac8e-1d29bd92d8d5","a74fee15-21bd-4605-b09e-ed3d35b9f655","8bd40d7f-f7ee-4f03-a454-f1c26ff039fb","c0477482-0f8e-46be-badb-e11fda9c4759","ee75c23e-3dd2-40a3-84d1-b39818040a06","a61a562c-0ddc-45b4-9750-a7810f6f26a5","e98e78da-5ee6-4a3f-942f-034f5f7af121","a63f2901-c43f-4b0f-9d34-546969b0d31c","295b74bf-139e-4d21-ae4a-8ce39eabb598","cf594e95-ba86-4235-9dbd-8e4b81a1a37d","fe262805-fc15-48f3-b6ae-8c2c452f17ba"],"propsByKey":{"bc92fce9-c92c-4fb5-9741-9bdb51bad95c":{"name":"I WILL EAT YOU SHARK.png_1","sourceUrl":null,"frameSize":{"x":650,"y":461},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZkNFHEJv.coGfLeRfWRGiSVQkOz5tJkt","loadedFromSource":true,"saved":true,"sourceSize":{"x":650,"y":461},"rootRelativePath":"assets/bc92fce9-c92c-4fb5-9741-9bdb51bad95c.png"},"4c99e81f-f441-4ff6-998b-a6f89ac5a925":{"name":"underwater_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"iDJzbFxfpeQaaRDwkCR3ZRI29yWSL4s9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/4c99e81f-f441-4ff6-998b-a6f89ac5a925.png"},"c4c07695-ae23-49fe-98eb-f8800405a0e9":{"name":"water2","sourceUrl":null,"frameSize":{"x":512,"y":137},"frameCount":1,"looping":true,"frameDelay":12,"version":"EObdY268SXePGx9FAtEbYG_6MAm.sFtk","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":137},"rootRelativePath":"assets/c4c07695-ae23-49fe-98eb-f8800405a0e9.png"},"9c4455ed-bb71-45d5-9065-41f18e2f511c":{"name":"swimming_girl_compressed_3background removed.png_2","sourceUrl":"assets/v3/animations/73prMIUOO2kUXt88xLEf9HEgyE2EtMw-b1uJF2dlqiI/9c4455ed-bb71-45d5-9065-41f18e2f511c.png","frameSize":{"x":189,"y":293},"frameCount":1,"looping":true,"frameDelay":4,"version":"5r99DwP1i0dNZHDZwhFLRZCj.T59n9Y6","loadedFromSource":true,"saved":true,"sourceSize":{"x":189,"y":293},"rootRelativePath":"assets/v3/animations/73prMIUOO2kUXt88xLEf9HEgyE2EtMw-b1uJF2dlqiI/9c4455ed-bb71-45d5-9065-41f18e2f511c.png"},"fa15e67f-f7b7-417d-83f5-d496883ee8b5":{"name":"I AM RIGHT HERE SHARK.jpg_1","sourceUrl":null,"frameSize":{"x":1140,"y":834},"frameCount":1,"looping":true,"frameDelay":12,"version":"5iScp1C6H33zMWsK5x0Ck_H8nlmWUHqa","loadedFromSource":true,"saved":true,"sourceSize":{"x":1140,"y":834},"rootRelativePath":"assets/fa15e67f-f7b7-417d-83f5-d496883ee8b5.png"},"f6c50570-f8c6-4f84-8d63-09a8152caf0a":{"name":"waves.jpg_1","sourceUrl":null,"frameSize":{"x":450,"y":406},"frameCount":1,"looping":true,"frameDelay":12,"version":"ntUll.QcsiPzMYyhBH1w4vVxB09WqE6m","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":406},"rootRelativePath":"assets/f6c50570-f8c6-4f84-8d63-09a8152caf0a.png"},"d68d57af-69e6-44ea-ac8e-1d29bd92d8d5":{"name":"ALMOST THEIR SHARK.png_1","sourceUrl":null,"frameSize":{"x":880,"y":516},"frameCount":1,"looping":true,"frameDelay":12,"version":"1l3uLiyHkFWph7tgj.7BzjnGk2qndXEd","loadedFromSource":true,"saved":true,"sourceSize":{"x":880,"y":516},"rootRelativePath":"assets/d68d57af-69e6-44ea-ac8e-1d29bd92d8d5.png"},"a74fee15-21bd-4605-b09e-ed3d35b9f655":{"name":"fish powerup.png_1","sourceUrl":null,"frameSize":{"x":321,"y":157},"frameCount":1,"looping":true,"frameDelay":12,"version":"ANXeLSXjNt8lSGwJHUIHcb6xONyUvZwA","loadedFromSource":true,"saved":true,"sourceSize":{"x":321,"y":157},"rootRelativePath":"assets/a74fee15-21bd-4605-b09e-ed3d35b9f655.png"},"8bd40d7f-f7ee-4f03-a454-f1c26ff039fb":{"name":"Water","sourceUrl":null,"frameSize":{"x":512,"y":127},"frameCount":1,"looping":true,"frameDelay":12,"version":"oiadol7Ut2cyu1VQv02ZhYBfMD30nMF2","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":127},"rootRelativePath":"assets/8bd40d7f-f7ee-4f03-a454-f1c26ff039fb.png"},"c0477482-0f8e-46be-badb-e11fda9c4759":{"name":"Water3","sourceUrl":null,"frameSize":{"x":512,"y":127},"frameCount":1,"looping":true,"frameDelay":12,"version":"ybV_etnbHXRXsz24aNlmO30H7heJ06ey","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":127},"rootRelativePath":"assets/c0477482-0f8e-46be-badb-e11fda9c4759.png"},"ee75c23e-3dd2-40a3-84d1-b39818040a06":{"name":"target_back_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"34ajj.9zOoa91onV30PbF_Ob570BqS6A","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/ee75c23e-3dd2-40a3-84d1-b39818040a06.png"},"a61a562c-0ddc-45b4-9750-a7810f6f26a5":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"GJpGI9uXKONo36XcalZhILSVVKY41j_n","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a61a562c-0ddc-45b4-9750-a7810f6f26a5.png"},"e98e78da-5ee6-4a3f-942f-034f5f7af121":{"name":"Peal.jpg_1","sourceUrl":null,"frameSize":{"x":259,"y":194},"frameCount":1,"looping":true,"frameDelay":12,"version":"YHpkeppMIpVe5qXU8abCW5Hefc14Hk1d","loadedFromSource":true,"saved":true,"sourceSize":{"x":259,"y":194},"rootRelativePath":"assets/e98e78da-5ee6-4a3f-942f-034f5f7af121.png"},"a63f2901-c43f-4b0f-9d34-546969b0d31c":{"name":"Peal in shell","sourceUrl":null,"frameSize":{"x":260,"y":260},"frameCount":1,"looping":true,"frameDelay":12,"version":"CwvB6BogGYDsG82K.JUZjJIJMVNtIUwE","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":260},"rootRelativePath":"assets/a63f2901-c43f-4b0f-9d34-546969b0d31c.png"},"295b74bf-139e-4d21-ae4a-8ce39eabb598":{"name":"fish powerup 2.png_1","sourceUrl":null,"frameSize":{"x":321,"y":157},"frameCount":1,"looping":true,"frameDelay":12,"version":"rlLHUUGB0UBknMxjrfQSA69522bH3dBN","loadedFromSource":true,"saved":true,"sourceSize":{"x":321,"y":157},"rootRelativePath":"assets/295b74bf-139e-4d21-ae4a-8ce39eabb598.png"},"cf594e95-ba86-4235-9dbd-8e4b81a1a37d":{"name":"gameOver.png_1","sourceUrl":null,"frameSize":{"x":381,"y":21},"frameCount":1,"looping":true,"frameDelay":12,"version":"00bV7PILkquGtlscuA82kYOi0ceifqQd","loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":21},"rootRelativePath":"assets/cf594e95-ba86-4235-9dbd-8e4b81a1a37d.png"},"fe262805-fc15-48f3-b6ae-8c2c452f17ba":{"name":"restart.png_1","sourceUrl":null,"frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"2lmZj9LyPMVl6bdhXDBZQJUrxZs6t05o","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/fe262805-fc15-48f3-b6ae-8c2c452f17ba.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 
var PLAY = 1;
var END = 0;
  var gameState = "PLAY";
var textVisible = true; 
var ocean =createSprite(10,200,400,800);
ocean.setAnimation("Water");
ocean.scale=5;

var girl = createSprite(206,353,100,100);
girl.setAnimation("swimming_girl_compressed_3background removed.png_2");
girl.scale=0.2;
girl.setCollider("circle",0,0,100);

var resetButton = createSprite(200,200,200,200);
resetButton.setAnimation("restart.png_1");
resetButton.visible=false;

var GameOver = createSprite(200,95,200,200);
GameOver.setAnimation("gameOver.png_1");
GameOver.visible=false;

//create Obstacle and Cloud Groups
var PearlGroup = createGroup();
var fishGroup = createGroup();

var count = 0;

function draw() {
  background("#A1FAC2");
 if(gameState==="PLAY"){
   resetButton.visible=false;
  GameOver.visible=false;
 }
  ocean.velocityY=3;
  if(ocean.y>300){
    ocean.y=200;
  }
 drawSprites();
 if(keyDown("UP_ARROW")){
    textVisible = false; 
  } 
 
  if(textVisible){ 
textSize(18);
textFont("Georgia");
textStyle(BOLD);
fill("black");
    text("Get to 50 to get to the next level",50,100);
}
createEdgeSprites();
textSize(18);
textFont("Georgia");
textStyle(BOLD);
fill("black");
 text("Score: "+ count, 300, 40);
  console.log(gameState);
  
  if (count===50){
   gameState="END";
   count=0;
   girl.x=200;
   girl.y=200;
   girl.velocityX=0;
   fishGroup.setVelocityXEach(0);
   fishGroup.destroyEach();
   fishGroup.setLifetimeEach(-1);
  PearlGroup.setVelocityXEach(0);
   PearlGroup.destroyEach();
   PearlGroup.setLifetimeEach(-1);
   GameOver.visible=true;
   resetButton.visible=true;
 if (mousePressedOver(resetButton)){
 gameState="PLAY" ; 
 }
  }

 
 
 






 makeGirlmove();
 spawnFish();
spawnPeals();
spawnFish1();
}



//nife









function makeGirlmove(){
 if (gameState==="PLAY"){
   if (keyDown("LEFT_ARROW")) {
   girl.x=girl.x-10;
 }
  if (keyDown("RIGHT_ARROW")) {
  girl.x=girl.x+10;
 }
 if (keyDown("UP_ARROW")) {
   if (girl.y>25)
   {
    girl.y = girl.y-10;
   }
 }
 if (keyDown("DOWN_ARROW")){
  
   girl.y = girl.y+10;
 }
}
 
 }
 
function spawnFish(){
  if(World.frameCount%40=== 0){
    var fish = createSprite(400,208,200,200);
    fish.y = randomNumber(0,380);
    fish.x= randomNumber(200,380);
     fish.setAnimation("fish powerup.png_1");
   fish.velocityX=-4;
   fish.setAnimation("fish powerup.png_1");
   fish.scale=0.19;
    
    if(fishGroup.isTouching(girl)){
  playSound("assets/zapsplat_multimedia_game_sound_positive_wooden_action_002_60439.mp3");
  fishGroup.destroyEach();
    count=count-10; 
   }
  
   //assign lifetime to the variable
    fish.lifetime = 100
    ;
     fishGroup.add(fish);
  }
}

function spawnPeals(){
  if(World.frameCount%80 === 0){
    var peal = createSprite(400,208,200,200);
   peal.y = randomNumber(0,380);
    peal.x= randomNumber(200,380);
     peal.setAnimation("Peal in shell");
   peal.velocityX=-2;
   peal.setAnimation("Peal in shell");
   peal.scale=0.19;
   
    if(PearlGroup.isTouching(girl)){
      playSound("assets/zapsplat_multimedia_game_sound_positive_wooden_action_medium_reverb_005_60444.mp3");
      PearlGroup.destroyEach();
      count=count+10;
    }

  
   //assign lifetime to the variable
    peal.lifetime = 200
    ;
    PearlGroup.add(peal);
  }
  
}

function spawnFish1(){
  if(World.frameCount%40=== 0){
    var fish = createSprite(400,208,200,200);
    fish.y = randomNumber(0,380);
    fish.x= randomNumber(0,200);
     fish.setAnimation("fish powerup 2.png_1");
   fish.velocityX=4;
   fish.setAnimation("fish powerup 2.png_1");
   fish.scale=0.19;
   
   if(fishGroup.isTouching(girl)){
  playSound("assets/zapsplat_multimedia_game_sound_positive_wooden_action_002_60439.mp3");
  fishGroup.destroyEach();
     count=count-10;
   }
  
   //assign lifetime to the variable
    fish.lifetime = 100
    ;
     fishGroup.add(fish);
  }
}







 
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
