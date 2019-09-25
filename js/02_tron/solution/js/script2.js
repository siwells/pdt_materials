
// room size
var sizex = 500;
var sizey = 500;

// position
var x1 = sizex/2;
var y1 = sizey/2 - 50;
var x2 = sizex/2;
var y2 = sizey/2 + 50;


// movement offset between each frame
var xOffset1 = 0;
var yOffset1 = -1;
var xOffset2 = 0;
var yOffset2 = 1;


// parameters of the game
var speed = 1; // line speed
var thickness = 1; //line thickness

document.addEventListener('keydown', function(event) {
	// player 1 keys
    if(event.keyCode == 37) {// left arrow
        xOffset1 = -1 * speed;
        yOffset1 = 0;
    }
    else if(event.keyCode == 38) {// up arrow
        yOffset1 = -1 * speed;
        xOffset1 = 0;

    }
    else if(event.keyCode == 39) {// right arrow
        xOffset1 = 1 * speed;
        yOffset1 = 0;
    }
    else if(event.keyCode == 40) {// down arrow
        yOffset1 = 1 * speed;
        xOffset1 = 0;
    }
    else if(event.keyCode == 80) {// P key: pause
        yOffset1 = 0;
        xOffset1 = 0;
		yOffset2 = 0;
        xOffset2 = 0;

    }
	// player 2 keys
	else if(event.keyCode == 65) {// A arrow
        xOffset2 = -1 * speed;
        yOffset2 = 0;
    }
    else if(event.keyCode == 87) {// W arrow
        yOffset2 = -1 * speed;
        xOffset2 = 0;

    }
    else if(event.keyCode == 68) {// D arrow
        xOffset2 = 1 * speed;
        yOffset2 = 0;
    }
    else if(event.keyCode == 83) {// S arrow
        yOffset2 = 1 * speed;
        xOffset2 = 0;
    }
});

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, sizex, sizey);
var interval = setInterval(loop, 4);

function loop(){
    
	// collision with obstacle. If collision detected, then stop
	var p1 = ctx.getImageData(x1, y1, 1, 1).data;
	var p2 = ctx.getImageData(x2, y2, 1, 1).data;
	if (p1[0]+p1[1]+p1[2] + p2[0]+p2[1]+p2[2] < 1530){
		clearInterval(interval);// stop calling loop function
		yOffset1 = 0;
        xOffset1 = 0;
		yOffset2 = 0;
        xOffset2 = 0;
		// game over message:
		if (p1[0]+p1[1]+p1[2]<765){
			alert("Red wins!");
		}
		else{
			alert("Blue wins!");
		}
	}
	
	var width = thickness;
	var height = thickness;
	
    // draw objects
	if (xOffset1 != 0){
		width = Math.abs(xOffset1);
	}
	if (yOffset1 != 0){
		height = Math.abs(yOffset1);
	}
	if (xOffset2 != 0){
		width = Math.abs(xOffset2);
	}
	if (yOffset2 != 0){
		height = Math.abs(yOffset2);
	}
    ctx.fillStyle = "blue";
    ctx.fillRect(x1, y1, width, height);
	ctx.fillStyle = "red";
    ctx.fillRect(x2, y2, width, height);
	
	// coordinates
	x1 = x1 + xOffset1;
    y1 = y1 + yOffset1;
	x2 = x2 + xOffset2;
    y2 = y2 + yOffset2;
	
	// wall collision detection
	//if (x > sizex){
	//	x = 1;
	//}
	//if (x < 1){
	//	x = sizex;
	//}
	//if (y > sizey){
	//	y = 1;
	//}
	//if (y <1){
	//	y = sizey;
	//}
}
