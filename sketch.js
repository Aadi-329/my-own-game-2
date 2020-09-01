var pc
var ground
var ground1
var pcImg           

var GameState=0
var score=0

function preload(){

  ground=loadImage("ground.jpg")
  pcImg=loadImage("a.png")





}
function setup(){

  
  createCanvas(500,1000)
   ground1= createSprite(250,-500,800,1500)
 
   ground1.scale=1
  


  pc=createSprite(200,-1)

  pc.scale=0.1



  

}

function draw(){
  
  background("white");
//  rectMode(CENTER)
 // imageMode(CENTER)

  pc.setVelocity(0,-6)

//ground1.depth=
 ground1.addImage(ground)
pc.addImage(pcImg)



 //console.log(camera.position.y) 
 if(pc.y<ground1.y-25&&pc.y<ground1.y-10)//pc.y<ground.y-20 )
 
 {

  
console.log("chk")
  ground1.y=pc.y-1000
  

 }


  camera.position.x=pc.x
  camera.position.y=pc.y

  
  
 




 

 // pc.setVelocity(0,-score)






  drawSprites()

}


