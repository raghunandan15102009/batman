class Person{
    constructor() {

        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(200,500,50,100,options);       
        this.image=loadImage(batmanImg);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0, 0, 50,100);
        pop();
    }
}