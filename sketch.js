var ball;
var database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
var box = database.ref("BallMaster/position")
box.on("value",readPosition,showerror)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}



function readPosition(data){
position = data.val();
ball.x=position.x;
ball.y=position.y;
console.log(ball.x);
}
function showerror(){
    console.log("cannot read the values");
}
function writePosition(x,y){
database.ref("BallMaster/position").set({
    'x':ball.x+x,
    'y':ball.y+y
})
}