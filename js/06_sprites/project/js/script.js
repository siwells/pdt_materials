(function(){

// room size
var sizex = 500;
var sizey = 500;

var xOffset = 0;
var yOffset = 0;

// 2D canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

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
        // jump
		player.isJumping = true;
		player.yVel = player.jumpInitialVelocity;
    }
});

// manage key strokes (key up)
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


// player
var player = {
	// main properties
    speed: 10,
    x: 250,
    y: 400,
    width: 40,
    height: 40,
	yVel: 0,
	jumpSpeed: 20,
	jumpInitialVelocity: 50,
	isJumping: false,
	// sprite information
	idleSprite: new Image(),
	jumpSprite: new Image(),
	
	// functions
	update: function(t, dt){ 
		this.x = this.x + xOffset;
		this.y = this.y + yOffset;
		
		// jump
		if (player.isJumping){
			dt *= this.jumpSpeed;
			this.yVel = this.yVel - dt * 9.8;
			this.y = this.y - dt * this.yVel;
		}
	},
    draw: function() {
        ctx.drawImage(this.idleSprite, this.x, this.y, this.width, this.height);
    }
};

/*
	UPDATE
*/
function update(t, dt){
	// udpate player
    player.update(t,dt);
}

/*
	DRAW
*/
function draw(){
	// clear screen	
	ctx.fillStyle = "white";
    ctx.fillRect(0, 0, sizex, sizey);
	
	// draw player
    player.draw();
}

// application start time
var tPrev = 0;

// player sprite initialisation
player.idleSprite.src = ".\\images\\character\\front.png";
player.jumpSprite.src = ".\\images\\character\\jump.png";


// game loop call   
requestAnimationFrame(gameLoop);
	
/*
	GAME LOOP
*/
function gameLoop(timestamp){

	// manage time
	var t = timestamp;
	var dt = t - tPrev;
	tPrev = timestamp;
	// main function calls
	update(t/1000,dt/1000);
	draw();
	
	// ensures that the gameLoop function is called repeatedly
	requestAnimationFrame(gameLoop);

}

 })();