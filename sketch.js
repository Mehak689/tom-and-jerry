var jerry , jerryImage1 , jerryImage2, jerryImage3 ;
var tom , tomImage1 , tomImage2 , tomImage3;
var garden , gardenImage;

function preload(){
    //load the images here
    gardenImage = loadImage("images/garden.png")

    jerryImage1 = loadAnimation("images/jerryOne.png");
    jerryImage2 = loadAnimation("images/jerryTwo.png" ,"images/jerryThree.png" );
    jerryImage3 = loadAnimation("images/jerryFour.png")
    
    tomImage1 = loadAnimation("images/tomOne.png");
    tomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImage3 = loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(870,600);
    tom.addAnimation("tom" ,tomImage1)
    tom.scale=0.1;
    

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry" ,jerryImage1)
    jerry.scale=0.1;


}

function draw() {

    background( gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){

        tom.velocityX=0;
        tom.addAnimation("tomLastImage" , tomImage3);
        tom.x=300;
        tom.changeAnimation("tomLastImage");

        jerry.addAnimation("jerryLastImage" , jerryImage3);
        jerry.changeAnimation("jerryLastImage");
    }
    
 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        tom.velocityX=-5;
        tom.addAnimation("tomRunning" , tomImage2)
        tom.changeAnimation("tomRunning")

        jerry.addAnimation("jerryTeasing" , jerryImage2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");

    }
}
