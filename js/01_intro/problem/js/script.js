
var x = 0;
var y = 0;
var speed = 5;

// manage key strokes
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {// left arrow pressed
        
    }
    else if(event.keyCode == 39) {// right arrow pressed
        
    }
});

// 2D canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// create background window (500x500 white square)
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 500);

// call draw0 function every 20ms
setInterval(draw0, 20);

function draw0(){
    // clear screen
    //ctx.fillStyle = "white";
    //ctx.fillRect(0, 0, 500, 500);
    
    // x and y offset values to move animated object
    xOffset = 0;
    yOffset = 5;
    
    x = x + xOffset;
    y = y + yOffset;
    
    // draw 20x20 cyan square at specified coordinates  
    ctx.fillStyle = "cyan";
    ctx.fillRect(250 + x, y, 20, 20);    
}
