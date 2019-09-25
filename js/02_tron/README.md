# Session #1 JavaScript Intro 

One of the suggestions that I made for further work last week was making a two-player 2D version of Tron. I don’t know whether any of you will have gone that far, but that’s what I propose that you all attempt this week. Creating this game is not actually the main goal here. The goal is to go through the process of making it, as it is through that process that you will develop your programming skills and discover how you could apply what you are learning to the production of your own original games. Tron is the perfect illustration of the fact that the simplest ideas can often make for fun games to play when two players are involved.

## Tasks
I could simply tell you that your task is to try to produce a two-player Tron similar to the one presented at the start of the session and let you get on with it. However, at this start of your journey as a computing student, you might find it hard to get to the solution. Not that getting there is necessarily beyond your capability, but because you might not be used to the process of solving this type of problem. What I’m trying to do here is draw your attention to the fact that one of the most important learning point in this type of exercise is not what commands to use in Javascript to do one thing or another, but it is how to break down a complex problem into a sequence of manageable tasks. It’s about devising a sequence of actions that will incrementally build up to the solution.
In the present case, the starting point is the code you were given last week. What it does is draw a thick line that goes from top to bottom. How would you go from that to a fully functional Tron? What I will write next is what some of you might already do, but for others, this is something that you will learn to come up with by yourself as you gain experience:

* Reduce the thickness of the line to 1 pixel instead of 20. Later on, you can also make this a variable.
* Allow the user to control the direction of the line by using the arrow keys.
* Detect when a trail collides with something (outer boundary or trail)
* Do the same thing for a different coloured trail controlled by another player using WASD instead of the arrow keys.

If you do that, you will end up with a perfectly functional game. The only thing that requires you to use some javascript commands that you don’t know and might struggle to find out about is the collision detection part. The question you should ask yourself is: what test should you conduct to identify whether a line is colliding with something?
There are different ways of doing this, but the simplest way is to realise that a collision occurs when a player position is over a pixel that is not white: collision with a trail means that the player will go over a red or blue pixel, and collision with the edges of the room means that the player will go over a black pixel.
That’s the conceptual answer but how do you turn this into code? If, like me you are not a javascript user, you will probably use Google to find possible answers, using a search term similar to: “javacript canvas pixel color”.

The answer is this:

    var p = ctx.getImageData(x, y, 1, 1).data;

This variable p represents the colour of a pixel located at coordinates (x, y). A colour is represented by a series of four 8-bit numbers (i.e., ranging from 0 to 255):
    
    [R, G, B, A]

Where R is red, G is green, B is blue and A is the alpha or opacity. Here are some examples of colours coded in this way:

* [0 0 0 255] black
* [255 255 255 255] white
* [255 0 0 255] red
* [127 127 127 255] mi-grey

Going back to the code, you can get access to each element of the colour with:

    p[0] // red
    p[1] // green
    p[2] // blue

This information should suffice for you to test whether a collision occurs. You will need to complete a conditional statement like:

    // detect collisions
    if (){
        // stop game and display game over message
    }

Good luck and have fun!

If you’re done and can’t think of improvements to make, here are some ideas:
• Make the speed of the game variable. You could also allow players to choose a level. The higher the level, the faster it is.
• When the game is over, give the players the option to restart the game without having to play F5
• Keep track of scores.
• Allow players to enter their names
• Allow player to speed up if their trail is close enough to a wall. This allows one to overtake another player and cut them off!

## Resources

* [W3Schools JavaScript Reference](https://www.w3schools.com/jsref/)
