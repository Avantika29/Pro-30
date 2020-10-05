class Sling{
    constructor(a,b)
    {
        var options = {
            bodyA : a,
            pointB : b,
            length : 10,
            stiffness : 0.04
        }

      this.Sling =  Matter.Constraint.create(options);
      this.pointB = b;
      World.add(world,this.Sling);
    }
display(){
  if(this.Sling.bodyA){
    strokeWeight(4);
    line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,
        this.pointB.x,this.pointB.y)
  }
    
}

 fly() {
   this.Sling.bodyA = null; 
}
}

