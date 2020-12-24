const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var water, thunder, thunderImg;
var batman, batmanImg;

function preload() {
    batmanImg = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
    thunderImg = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
    thunderImg3 = loadImage("3.png");
    thunderImg4 = loadImage("4.png");
}

function setup() {
    createCanvas(400, 600)
}

function draw() {
    batman = new Person();
    water = new Water();
    batman.display();
    water.display();
    if(frameCount%60===0){
        thunder=createSprite(Math.round(random(0,400)),50,50,50);
        thunder.addImage(thunderImg);
    }
    if(frameCount%80===0){
        thunder2=createSprite(Math.round(random(0,400)),50,50,50);
        thunder.addImage(thunderImg2);
    }
    if(frameCount%100===0){
        thunder3=createSprite(Math.round(random(0,400)),50,50,50);
        thunder.addImage(thunderImg3);
    }
    if(frameCount%110===0){
        thunder4=createSprite(Math.round(random(0,400)),50,50,50);
        thunder.addImage(thunderImg4);
    }
}

