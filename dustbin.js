class Dustbin {
    constructor(x, y) {
      var options = {
         isStatic:true
      }

      this.width = 200;
      this.height = 213;
      this.wallThickness = 20;
      
      this.bottomBody = Bodies.rectangle(x, y, this.width, this.wallThickness, options);
      this.leftBody = Bodies.rectangle(x-this.width/2,y-this.height/2,this.wallThickness,this.height,options)
      this.rightBody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.wallThickness,this.height,options)
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody)
      this.image = loadImage("dustbingreen.png")

    }
    display(){
      var posBottom = this.bottomBody.position;
      var posLeft = this.leftBody.position;
      var posRight = this.rightBody.position;
      push();
      translate(posLeft.x,posLeft.y)
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(255)
      rotate(this.angle)
      pop();

      push();
      translate(posBottom.x,posBottom.y)
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(255)
      rotate(this.angle)
      pop();

      push();
      translate(posRight.x,posRight.y)
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(255)
      rotate(this.angle)
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      
    }
  };