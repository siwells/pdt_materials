# Session #5 Jumping

After moving and shooting, let’s have a look at jumping. The objectives of this session are for you to

* develop an understanding of the maths and physics required to implement a jump action
* Build on your understanding of the topic to modify the jump and place it in a gaming scenario of your choice

The project provided this week already includes a working jump action (activated when the space bar is pressed). All you need to do is understand how it works and then modify it and place it in a gaming scenario.
Start by examining the code. The first thing you will notice is that it has been reorganised. Here is a summary of some of the main modifications made:

* Everything is now wrapped in the body of a function. This is a javascript-specific technique to ensure that there are no global variables in this script. Just go with it.
* The main modification involves the way the game loop is implemented and structured. Firstly, it is not managed by a function that is called every x milliseconds any longer. Again, a javascript-specific technique is used to call the gameLoop function. Note that this function gives us access to a timestamp, which is the number of milliseconds elapsed since the start of program. This is useful information for us to have in a game. This would allow us, for example, to make something happen every minute, or at a point that depends on the time elapsed. What the gameLoop function does is quite standard:
   * It manages time: t represents the time elapsed, and dt represent the time elapsed since the previous frame.
   * It calls update, whose role is to update the state of the game objects at each frame. In our program, there is only one game object, which is a player that has a number of properties, such as position, velocity, etc.
   * It calls draw, which draws game objects in their current state.
* Properties have been added to the player object to be able to compute its jump trajectory. The player update function has also been modified to produce the jump when the space bar has been pressed. This code will probably look quite obscure, so here are some explanations, to complement the presentation given in the lab. A bit of maths and physics is required here:

Let’s call a the acceleration of the player, v its velocity and p its position. Then we can write that:

    a = dv/dt
    v = dp/dt

We can therefore compute the current velocity of the player from its acceleration and its previous velocity, i.e., its velocity dt ago:

    v(t+dt) = v(t) + a(t) dt

Similarly, we can compute the current position of the player from its previous position and velocity.

    p(t+dt) = p(t) + v(t) dt

This, plus some subtleties that you will learn about when you are in third year leads to the jump code added to the player update function:

    this.yVel = this.yVel ‐ dt * 9.8;
    this.y = this.y ‐ dt * this.yVel;

The -9.8 value comes from the fact that the only acceleration the player is subjected to is earth’s gravity (9.8m.s-2, applied along the negative y axis).

For a more detailed presentation of the maths of jumps, please watch the following presentation:

[https://www.youtube.com/watch?v=hG9SzQxaCm8](https://www.youtube.com/watch?v=hG9SzQxaCm8)

So, what do you have to do? It’s up to you, really, but here are some ideas, from most to not so obvious:
* The code provided produces a jump and an infinite fall. It would be nice to land back on the ground!
* Being able to jump on things would also be nice. You can start thinking of gaming scenarios in that regard, but to get started, creating blocks to jump on (and manage collision detection with) would suffice
* The current jump mechanics allows for multiple jumping (you can jump while in the air). This might be a desired feature, or this might be something you want to prevent, or limit to double jumping only, as opposed to infinite jumping.
* Moving left and right while in the air is currently possible. Again, this could be a feature, or you may want to implement an alternative behaviour for the horizontal motion while jumping. Watch the video mentioned above for some ideas about how to deal with the horizontal trajectory of your jump.
* Integrating the jump in a game: the purpose of these game development sessions is to show you how fundamental gaming concepts can be implemented, so you can use them creatively. With some understanding of moving, jumping, shooting and a working approach to collision detections, there’s a lot you can do! Come up with your own 2D game idea based on what you can do, and you will find that there are more things to learn, more problems to solve. That’s great, bring your new problems and questions to the lab every Friday and we’ll give you some clues as to how you can solve them ...

## Resources

* [W3Schools JavaScript Reference](https://www.w3schools.com/jsref/)
