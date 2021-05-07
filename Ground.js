class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,options);
      this.width = width;
      this.height = height;
      World.add(world, this.ground);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(2);
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };