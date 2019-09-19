# Session #1 JavaScript Intro 

The goal of this session is to introduce you to javascript, a very accessible language which can be used to develop web-based 2D games very quickly. This builds on the ["READY." lecture](https://github.com/siwells/READY) from freshers week, using JS in the browser to play with games and hack some code.

It is likely that there will be considerable variations between your programming experience. The tasks are designed for beginners, but more experienced programmers should be able to take the ideas presented as far as they like. This should be fun (in a programming kind of way) for everyone.

You have been provided with a webpage and a script. You don’t need to edit the web page, you only need to worry about the script. 

Our job is to tackle some, or all of the following challenges:

1. The demo script provided makes a square move down at constant speed from the top of the canvas in a straight line. Create a speed variable and use it to control the velocity at which the square travels
2. A cube travelling in a straight line is not very exciting. Try to make it travel downwards, but not in a straight line, as if the square represented a drunk character.  If you remove the two lines of code that clear the canvas at every iteration, the outcome may look similar to the drawing that features at the top of this document. You will need to use random numbers to do this. Use Google or a documentation page on Javascript (such as the w3school link from the resources at the bottom of this document) to find out how to do so. The point of this task is to show how a path in a 2D game level could be procedurally generated.
3. One can have a lot of fun drawing things, but a key aspect of game development that you must be desperate to learn about is user input: how can the user control the behaviour of say, a character using the keyboard, for instance. This is easily done using the script provided. You will see that the document is made to “listen” to user input, specifically keystrokes. There is space for the implementation of a behaviour when the left or right arrows are pressed. The challenge is to make the cyan cube go left when the left arrow key is pressed, and right when the right arrow key is pressed.
4. Once you have done that, add up and down arrow key controls so that the cube can move in any direction. Note that I don’t expect the cube to stop if no key is pressed. To make it stop, you can add a pause functionality, for example when the P key is pressed.
5. There is no limit to how far you can take this. A fun additional task would be to implement a two-player version: there are now two cubes: one controlled with the arrow keys, and one with WASD keys. Then you can add collision detection: trigger a popup alert when the two cubes collide.

We can draw things, we can control one or two players, that’s a good start. It might not be too difficult to take things further and implement a two-player version of the Tron lightcycle game (which we'll do next week).

## Resources

* [W3Schools JavaScript Reference](https://www.w3schools.com/jsref/)
