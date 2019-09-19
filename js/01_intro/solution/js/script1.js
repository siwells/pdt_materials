
var x = 0;
var y = 0;
var speed = 5;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {// left arrow
        xOffset = -1;
        yOffset = 0;
    }
    else if(event.keyCode == 38) {// up arrow
        yOffset = -1;
        xOffset = 0;

    }
    else if(event.keyCode == 39) {// right arrow
        xOffset = 1;
        yOffset = 0;
    }
    else if(event.keyCode == 40) {// down arrow
        yOffset = 1;
        xOffset = 0;
    }
    else if(event.keyCode == 80) {// P key: pause
        yOffset = 0;
        xOffset = 0;

    }
});

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 500);
setInterval(draw2, 20);

function draw0(){
    // clear screen
    //ctx.fillStyle = "white";
    //ctx.fillRect(0, 0, 500, 500);
    
    // draw object
    ctx.fillStyle = "cyan";
    ctx.fillRect(250 + x, y, 20, 20);
 
    xOffset = 0;
    yOffset = 5;
    
    x = x + xOffset;
    y = y + yOffset;
}

function draw1(){
    // clear screen
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);
    
    // draw object
    ctx.fillStyle = "cyan";
    ctx.fillRect(250 + x, y, 20, 20);
 
    xOffset = 10;
    yOffset = 0;

 
    x = x + xOffset;
    y = y + yOffset;
}

function draw2(){
    // clear screen
    //ctx.fillStyle = "white";
    //ctx.fillRect(0, 0, 500, 500);
    
    // draw object
    ctx.fillStyle = "cyan";
    ctx.fillRect(250 + x, y, 20, 20);
 
    xOffset = (Math.random() * 10) - 5;
    yOffset = (Math.random() * 9) - 4;

 
    x = x + xOffset;
    y = y + yOffset;
    
    // erase previous object by drawing an object at its last location in the color of the canvas
    //ctx.fillStyle = "white";
    //ctx.fillRect(x-40, 20, 20, 20);
}

function draw3(){
    // clear screen
    //ctx.fillStyle = "white";
    //ctx.fillRect(0, 0, 500, 500);
    
    // draw object
    ctx.fillStyle = "cyan";
    ctx.fillRect(250 + x, 250 + y, 20, 20);
  
    x = x + xOffset;
    y = y + yOffset;
    
    // erase previous object by drawing an object at its last location in the color of the canvas
    ctx.fillStyle = "white";
    if (xOffset != 0 || yOffset != 0){
        ctx.fillRect(250 + x - 20 * xOffset, 250 + y - 20 * yOffset, 20, 20);
    }
    
}