class Slingshot{
    constructor(bodyA,pointB){
      var  Options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10
      } 
      //to create point B
      this.pointB=pointB
      // to creat a general chain
      this.sling=Constraint.create(Options);
      //to add chain to the main world
      World.add(world , this.sling);
    }
    // to make then bird fly
    fly(){
        this.sling.bodyA=null
    }
    display(){
        // to draw a line if there is some thing in bodyA
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)}
    }
}