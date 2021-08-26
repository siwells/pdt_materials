// room size
var sizex = 500;
var sizey = 500;

var xOffset = 0;
var yOffset = 0;

// bullets
var playerBullets = [];

// 2D canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// create background window (500x500 white square)
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 500);

// player
var player = {
    speed: 2,
    color: "#00A",
    x: 250,
    y: 400,
    width: 10,
    height: 20,
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

// create a bullet
function Bullet(I) {
    I.active = true;
    I.xVelocity = 0;
    I.yVelocity = -I.speed;
    I.width = 3;
    I.height = 3;
    I.color = "#000";

    // check whether bullet is within canvas
    I.inBounds = function() {
        return I.x >= 0 && I.x <= sizex &&
        I.y >= 0 && I.y <= sizey;
    };

    // draw bullet
    I.draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    // udpate bullet
    I.update = function() {
        I.x += I.xVelocity;
        I.y += I.yVelocity;

        I.active = I.active && I.inBounds();
    };

  return I;
}

// manage key strokes (key down)
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {// left arrow pressed
		// move left
        xOffset = -player.speed;
        yOffset = 0;
    }
	
    else if(event.keyCode == 39) {// right arrow pressed
		// move right
        xOffset = player.speed;
        yOffset = 0;
    }
	
	else if(event.keyCode == 32) {// space bar
        // fire bullet
		playerBullets.push(Bullet({
            speed: 5,
            x: player.x + player.width/2,
            y: player.y + player.height/2
        }));
    }
});

// manga key strokes (key up)
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37) {// left arrow pressed
		// move left
        xOffset = 0;
        yOffset = 0;
    }
	
    else if(event.keyCode == 39) {// right arrow pressed
		// move right
        xOffset = 0;
        yOffset = 0;
    }
});

// call draw0 function every 1ms
setInterval(draw, 1);


// main function
function draw(){
    // clear screen
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, sizex, sizey);
    
    // udpate player
    player.x = player.x + xOffset;
    player.y = player.y + yOffset;
    
    // update bullets
    playerBullets.forEach(function(bullet) {
        // check that bullet is within canvas
        bullet.update()
    });
    
    // remove inactive bullets from bullet vector
    playerBullets = playerBullets.filter(function(bullet) {
        return bullet.active;
    });
    
    // draw player
    player.draw();
	
	// draw bullets
	playerBullets.forEach(function(bullet) {
		// draw bullet
		bullet.draw();
    });
}

// for further info, check:
// https://www.html5rocks.com/en/tutorials/canvas/notearsgame/