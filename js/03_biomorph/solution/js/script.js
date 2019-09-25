
// define the boundaries of the complex numbers that will generated and tested
var ymax = 1;
var ymin = -ymax;
var xmax = ymax;
var xmin = ymin;

// constant used by the algorithm (zn+1 = f(zn) + c)
var constreal = 1
var constimag = -.1
var con = {re: constreal, im: constimag};

// canvas dimensions
canvasx = 500;
canvasy = 500;

// number of iterations
nmax = 100;

// 2D canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

compute2();


// complex number multiplication function
//function multiply(float re1, float im1, float re2, float im2){
	//return [re1 * re2 - im1 * im2, 
//}

function add(z1, z2){
	return {re: z1.re + z2.re, im: z1.im + z2.im};
}

function multiply(z1, z2){
	return {re: z1.re * z2.re - z1.im * z2.im, im: z1.re * z2.im + z2.re * z1.im };
}

function power(z, n){
	if ( n > 1){
		return multiply(z, power(z,n-1));
	}
	else if (n = 1){
		return z;
	}
}

// biomorph generation, version 1 (zn+1 = zn^3 + c)
function compute1(){
for (i = 0; i < canvasx; i++){
	for (j = 0; j < canvasy; j++){
		x = xmin + (xmax - xmin) * j / canvasx;
		y = -ymin - (ymax - ymin) * i / canvasy;
		n = 0;
		while (n < nmax && Math.abs(x) < 10 && Math.abs(y) < 10 && x * x + y * y < 10 * 10){
			xx = x * (x * x - 3 * y * y) + constreal;   
			yy = y * (3 * x * x - y * y) + constimag; 
			x = xx;
			y = yy;
			n++;
		}
		
		if (Math.abs(x) < 10 || Math.abs(y) < 10){
			ctx.fillStyle = 'hsl('+ n * 10 +','+ 80 + '%,' +   (50 + Math.min(Math.abs(x), Math.abs(y)) * 4) +'%)';
			ctx.fillRect(j, i, 1, 1);
		}
		
		else{
			ctx.fillStyle = "white";
			ctx.fillRect(j, i, 1 ,1);
		}
	}
}
}

// biomorph generation, version 2, using objects to represent complex numbers and related functions
function compute2(){
for (i = 0; i < canvasx; i++){
	for (j = 0; j < canvasy; j++){
		var z = {re: xmin + (xmax - xmin) * j / canvasx, im: - ymin - (ymax - ymin) * i / canvasy};

		n = 0;
		while (n < nmax && Math.abs(z.re) < 10 && Math.abs(z.im) < 10 && z.re * z.re + z.im * z.im < 10 * 10){
			z = add(power(z,5), con);
			n++;
		}
		
		if (Math.abs(z.re) < 10 || Math.abs(z.im) < 10){
			ctx.fillStyle = 'hsl('+ n * 20  +','+ 80 + '%,' +   (50 + Math.min(Math.abs(z.re), Math.abs(z.im)) * 4) +'%)';
			ctx.fillRect(j, i, 1, 1);
		}
		
		else{
			ctx.fillStyle = "white";
			ctx.fillRect(j, i, 1 ,1);
		}
	}
}
}