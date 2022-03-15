class YellowApples
{
    constructor(x,y)
    {
       this.xPosition = x;
       this.yPosition = y;
       this.sprite = createSprite(x,y,50,50)
       this.image = loadImage("Assets/Yellow_Apple.png");
       
    }

   display()
   {
       this.sprite.addImage(this.image);
       this.sprite.scale = 0.1;

   }

  score()
  {
    score = score + 10;

  }

}