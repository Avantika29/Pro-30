class Block {
    constructor(x, y, width, height) {
      var options = {
          //'restitution':0.8,
         // 'friction':0.3,
          //'density':1.
         // 'isStatic' : true
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){

      push();
      var pos =this.body.position;

      stroke("black");
      strokeWeight(2);
      // fill("white");
      
      if(this.body.position.y > 300 && this.body.position.y < 400){
        fill("blue")
      } else if(this.body.position.y > 260 && this.body.position.y < 300){
        fill("pink")
      }else if(this.body.position.y > 180 && this.body.position.y < 240){
        fill("yellow")
      }else {
        fill("white")
      }
      

      
     
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
       pop();
    }
  };
  


