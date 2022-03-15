class RedApples
{
    constructor(x,y)
    {
       this.xPosition = x;
       this.yPosition = y;
       this.sprite = createSprite(x,y,50,50)
       this.image = loadImage("Assets/Red_Apple.png");
       redGrp.add(this.sprite);
       
    }

   display()
   {
       this.sprite.addImage(this.image);
       this.sprite.scale = 0.1;

   }

  static score()
  {
    score = score + 10;

  }

}