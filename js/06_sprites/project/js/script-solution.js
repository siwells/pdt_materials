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

// utility function
// ensures that a string is padded with as many 0s as needed so that the length of the output is 4
// ex: pad("1") = "0001"
// ex: pad("11") = "0011"
function pad(s){
	var pad = "0000";
	return pad.substring(0, pad.length - s.length) + s;
}


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
	walkSprite: new Image(),
	walkSpriteSrc: ".\\images\\character\\walk\\walk",

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
    draw: function(n) {
		// draw character moving left or right
		if (!this.isJumping && xOffset != 0 ){
			let imgNum = n % 11 + 1;
			let src = this.walkSpriteSrc + pad(imgNum.toString())+".png";
			this.walkSprite.src = src;
			ctx.drawImage(this.walkSprite, this.x, this.y, this.width, this.height);
		}
		// draw idle character
		else if (!this.isJumping && xOffset == 0){
			ctx.drawImage(this.idleSprite, this.x, this.y, this.width, this.height);
		}
		// draw jumping character
		else{
			ctx.drawImage(this.jumpSprite, this.x, this.y, this.width, this.height);
		}
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
function draw(n){
	// clear screen	
	ctx.fillStyle = "white";
    ctx.fillRect(0, 0, sizex, sizey);
	
	// draw player
    player.draw(n);
}

// application start time
var tPrev = 0;
var n = 0; // frame number

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
	n++;
	// main function calls
	update(t/1000,dt/1000);
	draw(n);
	
	// ensures that the gameLoop function is called repeatedly
	requestAnimationFrame(gameLoop);

}

 })();