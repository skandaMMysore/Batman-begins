class Drops{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            friction: 0.1
        }
        
        this.body = Matter.Bodies.circle(x,y,diameter,options);
        this.diameter = diameter/2;
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.diameter,this.diameter);
        pop();
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}