class Umbrella{
    constructor(x,y,diameter,height){
        var options={
            isStatic:true
        }
        this.body = Matter.Bodies.circle(x,y,diameter,options);
        this.diameter = diameter/2;
        this.height = height;
        this.image = loadImage("images/walking_1.png");
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.diameter,this.height);
        pop();
    }
}