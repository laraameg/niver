class Estilingue {
    constructor (bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
          };
        
          this.elastico = Constraint.create(options);
          World.add(world,this.elastico);
          this.bodyA = bodyA;
          this.pointB = pointB;
          
    }
    display () {
        if (this.elastico.bodyA) {
            push();
            var A = this.bodyA.position;
            var B = this.pointB;
            strokeWeight(0);
            line(A.x, A.y,B.x, B.y);
            pop(); 
        }
        
    }

    voar () {
        this.elastico.bodyA = null
        
    }
    
    ligar() {
        this.elastico.bodyA = this.bodyA
    }
}

