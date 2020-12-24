class Water{
    constructor() {

        var options ={
            restitution:0.4
        }
        this.body = Bodies.circle(Math.round(random(0,400)), 50,10,options);       
        this.color=color("blue");
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, 10,10);
        pop();
    }
}