class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 70
        }
        this.pointB = pointB
        this.Launcher= Constraint.create(options);
        World.add(world, this.Launcher);

    }

    fly(){
        this.Launcher.bodyA=null
        
    }

      display(){
            var pointA = this.Launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}



