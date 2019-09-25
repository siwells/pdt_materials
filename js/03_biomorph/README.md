# Session # 3 - Procedural Generation

The point of the first two sessions was to get a sense of the programmatic effort that is required to create simple 2D games. Hopefully, you will have learned that a lot can be achieved with little effort and very little programming knowledge. For instance, you have seen how to draw things on screen and make a character move based on user input. Many games are conceptually not much more elaborate than what you have learned so far, but they include more appealing artwork. Since you are not artists (or at least you are not expected to be), you might be limited in your ability to produce interesting environments or characters. Sure, you could work with an artist, but what if you wanted to produce something yourself? Let’s turn this limitation into an opportunity: you might not be an artist, but you can code. So, what if you could generate your characters and environments procedurally? Welcome to the exciting world of Procedurally Generated Content (PCG)! In the next few sessions, you will learn techniques that you can use to generate interesting environments or possibly characters/creatures programmatically.

Before we go further, a summary of the concepts covered so far might be of use. This may help you relate what you have been doing in these sessions to what you are learning in the programming module you are taking.

## Variables

Variables are likely to be one of the first programming concepts you will have covered. We have used them to store values for parameters that may or may not change while we run our code. In the example below, the value of speed remains constant while x varies. Note that it would have been more appropriate, if the speed is definitely supposed to remain constant, to declare it as: const speed = 0;

    var x = 0;
    var speed = 5;
    ...
    function draw()
    {
       ...
       x = x + 1;
       ...
    }

I would also like to draw your attention to the meaning of the equal sign in programming. This is something that novices can find confusing as programmers write statements that contradict what your maths teachers have taught you. Indeed it wouldn’t make sense to write the following equation: 2 = 2 + 1.
However, we have happily been writing things like:

    x = x + 1;

That is because the equal sign doesn’t represent equality between two sides of an equation, but it represents a value assignment. The above statement means that we assign the value of x + 1 to the variable x, which makes sense.

## Conditional statements

Conditional statements are used frequently in programming and we have used them to check what key has been pressed by the user, or to detect collisions:

### Example 1: for collision detection

    var p1 = ctx.getImageData(x1, y1, 1, 1).data;
    if (p1[0] + p1[1] + p1[2] < 765){
        alert("Red wins!");
    }

### Example 2: user input detection

    if(event.keyCode == 37) {// left arrow
        xOffset1 = -1 * speed;
            yOffset1 = 0;
    }
    else if(event.keyCode == 38) {// up arrow
        yOffset1 = -1 * speed;
        xOffset1 = 0;
    }

## (Game)Loops

You have been introduced to the concept of a game loop, which is a fundamental concept of games development. Interestingly, our game loop hasn’t been implemented using what you might have learned as being a loop i.e., using a keyword such as for or while.
If you have learned about loops in Java/C#, they generally look like this:

    for (i = 0; i < n; i++){
        // this loop iterates n times
    }

Our game loop was implemented by calling iteratively after a fixed time duration:

    setInterval(draw, 20); // calls function draw every 20ms

## Tasks
Let’s move on to drawing fractals. For this task, we will no longer need a game loop. We will have loops, but we would like these to run as fast as possible. We will be using them to loop through the coordinates of every pixel on which we want to plot a colour. The beauty and power of many fractal algorithms is that very simple algorithms can yield complex results.
The type of algorithms we will use this week is not widely known, and was discovered by Clifford Pickover in the 80s by accident (a mistake in code he was writing). It is conceptually very similar to the more famous Julia or Mandelbrot sets. I’ve chosen it because some of the images that can be generated using this type of algorithms resemble microscopic life forms and could therefore be used to generate creatures for a game. More information is provided on the following page, including a link to an original publication about Pickover’s work published in Scientific American:

[http://paulbourke.net/fractals/biomorph/](http://paulbourke.net/fractals/biomorph/)

Note that Paul Bourke’s site is a great resource that deals with many graphics-related topics, which any computing student should find interesting.

I will start by running you through the algorithm in English, and will then give you its formal description.

Essentially, each image represents the outcome of some process applied to a set of complex numbers.

### Mapping between complex numbers and an image:

You might recall from your high-school maths that complex numbers are effectively two- dimensional objects: they contain a real and an imaginary part and can be notated as:

    z = a + i b, where a is the real part, b the imaginary part and where i2 = -1.

The real and imaginary parts can be mapped to the x and y axis of a 2D space. This way, we can plot a complex number on a graph. Its x coordinate represents its real part and its y coordinate its imaginary one. Therefore we can think of a portion of 2D space as a representation of complex numbers that are within a certain range.
To give you a concrete example, let’s say that the fractal objects that you will create map onto a square area that goes from (x=-3, y=-3) to (x=3, y = 3). This means that at the bottom left corner, we will have z = -3 - 3i. And at the top right corner, we will have z = 3 + 3i. In the center, we will find z = 0 + 0i. In our case, these values will be displayed on a 500x500 canvas, the same that we used in previous weeks.

### The algorithm

Pixels in our image represent a complex number, but what are we doing to that number to generate a colour? Very little, but the results can be spectacular. Here’s the algorithm (pseudo- code):

    For each pixel on the canvas:

        n = 0;
        define z;
        While (n <nmax and |re(z)|<10 and |im(z)|<10 and |z|<10):
            z = z2 + c;
            increment n;
        endWhile
     
        if (|re(z)|<10 or |im(z)|<10):
            fill pixel with black;
        else
            fill pixel with white;
        endif    
    endFor

Where: nmax is the maximum number of iterations, c is a (complex) constant. Both these values need to be set.

You are provided with some code that gives you a basic structure to work from. You will see that there is a nested loop that allows up to loop through each pixel of our image, inside of which our algorithm needs to be completed.

### Task 1: first implementation of the algorithm
Parse the code to make sense of what is implemented. If anything doesn’t make sense, please ask your tutor to explain. For the moment, ignore the code that refers to Task 2. Using the description of the algorithm above, complete the function compute1(). Here’s a clue: to fill a pixel with a given colour, simply draw a rectangle of dimension 1x1 at that position (you learnt to draw rectangles last week).

If you are successful, a biomorph should appear on your screen!

### Task 2: improved implementation of the algorithm

One of the weaknesses of our implementation is that there is no concept of what a complex number is and no ability to easily carry out operations on them. You have tested what result we get when we iterate on the function z2+c, but what if we wanted to test other functions, like z5-2z2+c? To do this, you would have to work out what the real and imaginary parts of this number looks like by hand. Wouldn’t it be nice if the computer could do these operations for us? To achieve this, we need to do two things:

1) Create something that represents a complex number
2) Implement the operations we need (multiplication, power and addition)

There are different types of data structures that could do the job in javascript. Fundamentally, we need one that allows us to store two elements (one for the real part and one for the imaginary part). The chosen structure will be an Object. To represent the number z = 1+2i, the syntax is:

    var z = {re: 1, im: 2};

Note that the choice of codes for each component is arbitrary. I’ve chosen re and im, but you can use whatever you like, as long as it makes sense. With this defined, the syntax to access the real and imaginary parts of this number will be:

    z.re // real part
    z.im // imaginary part

Let’s take an example and define two complex numbers using this notation:

    var z1 = {re: 2, im: 2};
    var z2 = {re: 1, im: 3};

if you wanted to compute the sum of these two numbers and assign it to the variable sum you would do:

    sum = {re: z1.re + z2.re, im: z1.im + z2.im};

Note that there is a function implemented in the code provided that does that for you. It is to show you how you can write a function that takes the complex number objects we have defined as parameters and returns a complex number object.

### Implementation of the multiplication function

To write the improved version of the algorithm, you need to write the functions that it requires, namely the multiplication and power functions. Start by writing a function that returns a complex number that is the product of two complex numbers. The function is already declared in the code. All you need to do is to write its body.

### Implementation of the power function

Once you have the multiplication, you can use it to implement the power function. This function is partly written, and you only have to add one missing line of code. Pay attention to what is already implemented: you will notice that the function calls itself. This is known as a recursive function. The same function could be written without recursion, but this is a good opportunity to illustrate this concept.

### Implementation of compute2()

Once you have a concept of complex number implemented and you are able to add them, multiply them and raise them to a certain power, you are ready to implement a version of the algorithm that uses this new and improved representation: fill the gaps in compute2() and then, further up in the script, call compute2() instead of compute1() to draw the image.

## Explore and beautify

The point of Task 2 was to make it easier for us to experiment with iterative functions. You have seen what you get for zn+1=zn2+c. Why not try other things? For example: zn+1=zn5+c? You can also experiment with different values for the constant c. Refer to Paul Bourke’s page for possible values of interest. Explore this space and see if you can catch interesting life forms! If you do, you can save the image generated from your web browser.
Final note: you will have noticed that the front page picture is a lot more colourful than the ones you are generating. There are lots of ways to assign colours to the pixels, but first you need to know how to define colours programmatically: last week, we saw that colours could be represented using RGB values (for Red Green and Blue). Colours can also be represented in a perhaps more intuitive way using HSL (Hue, Saturation, Lightness). To understand how this works, go to the following page and play around with the numbers:

[https://www.w3schools.com/colors/colors_hsl.asp](https://www.w3schools.com/colors/colors_hsl.asp)

As you can see, on your web Browser, Hue goes from 0 to 360 (which sounds like it would map nicely to an angle on a colour wheel!), while Saturation and Lightness go from 0 to 100. So, going back to our problem, here’s how you can use HSL to represent colours numerically:

Instead of writing the following to set the colour you will fill a rectangle/pixel with:

    ctx.fillStyle = "black";

you can write:

    ctx.fillStyle = 'hsl(50,35%,0%)';// any colour with a lightness value of 0 appears as black

What’s the benefit, you may ask? We can control the values with variables. For example, in
the following line, the hue and saturation depend on the value of n:

    ctx.fillStyle = 'hsl('+ n * 20 +','+ n + '%,50%)';
    
You should now know enough to produce colourful biomorphs. Tip, to generate the front page image, I used the number of iterations to control the hue and the real and imaginary parts of z to control the colour lightness.
Have fun!

## Resources

* [W3Schools JavaScript Reference](https://www.w3schools.com/jsref/)
* [W3Schools Colour Reference](https://www.w3schools.com/colors/colors_hsl.asp)
* [Info on biomorphs](http://paulbourke.net/fractals/biomorph/)
