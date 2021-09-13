var bgImg
var jetImg,jet;
var gameState ="start"
var alien,alienImg;
var asteroid,asteroidImg;
var powerPellet,powerPelletImg



function preload(){
 bgImg=loadImage("images/bg.jpg")
 jetImg=loadImage("images/aircraft.png")
 alienImg=loadImage("images/alien1.png")
 asteroidImg=loadImage("images/rock.png")
}

function setup() {
  createCanvas(500,700);
  jet=createSprite(250, 600, 50, 50);
  jet.addImage("jetImg",jetImg)
  jet.scale=0.3
  jet.visible=false
}

function draw() {
  background(bgImg);  
  drawSprites();

  if (gameState === "start"){

    textSize(50)
    fill("")
    textFont("Fixedsys")
    text("-Mission Surival-",80,100)

    textSize(25)
    fill("white")
    textFont("Fixedsys")
    text("   Mr.Robert ,head of Space Agency",50,200)
    text("    and his team has found a planet",45,230)
    text("    which is good  for human survival.",40,260)
    text("      They want to protect the planet ",35,290)
    text("      from aliens and you have to go ",30,320)
    text("       on your jet and protect the planet.",25,350)
    text("Press 'S' to Start",160,550)

    if(keyDown("S")){
      gameState="play"
    }
  

   }

  if (gameState === "play"){ 


    jet.visible=true


    if(keyDown(LEFT_ARROW)){
      jet.x=jet.x-10
    }
  
    
    if(keyDown(RIGHT_ARROW)){
      jet.x=jet.x+10
    }


    spawnAliens();
    spawnAsteroid();

  }



 

}

function spawnAliens(){

  if(frameCount%60===0){
    alien=createSprite(random(50,450),10,20,20)
    alien.velocityY=15
    alien.addImage("alienImg",alienImg)
    alien.scale=0.2
  }
  
}

function spawnAsteroid(){

  if(frameCount%200===0){
    asteroid=createSprite(random(50,450),10,20,20)
    asteroid.velocityY=15
    asteroid.addImage("asteroid",asteroidImg)
    asteroid.scale=0.2
  }

}

function powerPellet(){

  if(frameCount%100===0){
    powerPellet=createSprite(random(50,450),10,20,20)
    powerPellet.velocityY=8
    powerPellet.addImage("powerPellet",Img)
    powerPellet.scale=0.2
  }

}