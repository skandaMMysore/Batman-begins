const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var dew;
var maxDrops = 100;
var drops = []
function preload(){
    this.walkman = loadImage("images/walking_1.png");
}

function setup(){
   var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    //dew = new drops1(200,220,20);
    if(frameCount % 20 === 0){
        for(var i = 0;i < maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400),20));
        } 
    } 
    var rand = Math.round(1,4);
    if(frameCount%80===0){
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            //case 1: thunder.addImage();
            //break;
            //case 2: thunder.addImage();
            //break;
            //default:break;
        }
        thunder.scale = random(0.3,0.6);
    }
    umbrella = new Umbrella(300,550,320,160);
    
    
    
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    console.log(drops);
    for(var i = 0;i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    umbrella.display();
    thunder.display();
    
}   

