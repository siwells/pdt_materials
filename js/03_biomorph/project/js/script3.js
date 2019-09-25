
// define the boundaries of the complex numbers that will generated and tested
var ymax = 1.5;
var ymin = -ymax;
var xmax = ymax;
var xmin = ymin;

// constant used by the algorithm (zn+1 = f(zn) + c)
var constreal = 1;
var constimag = 0;
// Same constant represented by an object (Task 2)
var con = {re: constreal, im: constimag};

// canvas dimensions
canvasx = 500;
canvasy = 500;

// number of iterations
nmax = 100;

// 2D canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// run the first implementation of the algorithm
compute1();


// complex number operations (Task 2)
function add(z1, z2){
	return {re: z1.re + z2.re, im: z1.im + z2.im};
}

// multiplication (Task 2)
function multiply(z1, z2){
	// complete
}

// power (Task 2)
function power(z, n){
	if ( n > 1){
		return multiply(z, power(z,n-1));
	}
	else if (n = 1){
		// complete
	}
}

// biomorph generation, version 1 (zn+1 = zn^3 + c) (Task 1)
function compute1(){
for (i = 0; i < canvasx; i++){
	for (j = 0; j < canvasy; j++){
		x = xmin + (xmax - xmin) * j / canvasx;
		y = -ymin - (ymax - ymin) * i / canvasy;
		n = 0;
		while (n < nmax && Math.abs(x) < 10 && Math.abs(y) < 10 && x * x + y * y < 10 * 10){
			// compute z = z^2 + c. Complete this part
            // z is represented by is real part (x) and its imaginary part (y)
			
			
			
			
			n++;
		}
		
		// test whether |real(z)| < 10 or |im(z) < 10| 
		if (Math.abs(x) < 10 || Math.abs(y) < 10){
			// fill pixel at coordinate (x,y) with black
            // complete this part
		}
		
		else{
			// fill pixel at coordinate (x,y) with white
            // complete this part
		}
	}
}
}

// biomorph generation, version 2, using objects to represent complex numbers and related functions
// (Task 2)
function compute2(){
for (i = 0; i < canvasx; i++){
	for (j = 0; j < canvasy; j++){
		// declare z as object
		var z = {re: xmin + (xmax - xmin) * j / canvasx, im: - ymin - (ymax - ymin) * i / canvasy};
		n = 0;
		// rewrite the while loop
		// while() ...
        
        
        // rewrite the conditional statements that output the colours
		// if ...
        
        // else ...
	}
}
}