var red1,green1,yellow1;
var redImg,greenImg,yellowImg
var score = 0;
var redGrp,greenGrp,yellowGrp;


/*function preload()
{
  redImg = loadImage("Assets/Red Apple vector PNG.png")
  yellowImg = loadImage("Assets/Yellow Apple.jpg")
  greenImg = loadImage("Assets/Green Apple.png")
}*/



function setup() {
  createCanvas(windowWidth,windowHeight);
  redGrp = new Group();
  greenGrp = new Group();

  red1 = new RedApples(200,200);
  red2 = new RedApples(50,50);
  red3 = new RedApples(30,30);
  red4 = new RedApples(100,100);
  red5 = new RedApples(300,300)

  green1 = new GreenApples(350,350);
  green2 = new GreenApples(400,400);
  green3 = new GreenApples(450,450);
  green4 = new GreenApples(500,500);
  green5 = new GreenApples(550,500);

  yellow1 = new YellowApples(550,450);
  yellow2 = new YellowApples(550,400);
  yellow3 = new YellowApples(550,350);

}

function draw() {
  background(255,255,255);
  red1.display();
  red2.display();
  red3.display();
  red4.display();
  red5.display();

  green1.display();
  green2.display();
  green3.display();
  green4.display();
  green5.display();

  yellow1.display();
  yellow2.display();
  yellow3.display();

  text(mouseX + ',' + mouseY,mouseX,mouseY);
  textSize(40);
  stroke(10)
  text('Score:' + score,1050,56)
  
  


  for(var i = 0; i < redGrp.length; i++)
  {
    if(mousePressedOver(redGrp[i]))
    {
      redGrp[i].destroy();
      RedApples.score();
    }
  }

  for(var i = 0; i < greenGrp.length; i++)
  {
    if(mousePressedOver(greenGrp[i]))
    {
      greenGrp[i].destroy();
      GreenApples.score();
      
    }
  }

  for(var i = 0; i < yellowGrp.length; i++)
  {
    if(mousePressedOver(yellowGrp[i]))
    {
      yellowGrp[i].destroy();
      YellowApples.score();
      
    }
  }

  drawSprites();
}