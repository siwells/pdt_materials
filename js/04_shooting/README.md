# Session #4 - Shooting 

In this session, we’re going back to the type of more directly games-related problems we were working on two weeks ago: we have a character on a 2D map and we want to control it and make it do things. This week, what we want to do is make it fire bullets.
This week’s work is based on the following tutorial:

[https://www.html5rocks.com/en/tutorials/canvas/notearsgame/](https://www.html5rocks.com/en/tutorials/canvas/notearsgame/)

You are welcome to follow it, but what I’m doing below is to select only the bits that we need to add to what we already have. Besides, the above tutorial uses a plugin to manage keyboard input, whereas we don’t.

## Tasks

In the first couple of sessions, we have found ways of controlling the movement of something that resembles a player. However, we don’t really have a concept of what a player is. We have variables (such as x and y coordinates) and we have decided that these represent the player coordinates. This is far from ideal, in particular, you’ve seen that when we have multiple players, we need to duplicate these variables: x1, x2, etc.
Far better would be to have a concept or structure that holds information about a player. In Javascript (and not only in Javascript), we can do that with objects. These were introduced last week, if you managed to get as far as Task 2, in which you were asked to create an object that represented a complex object.

Creating a player object:

The following code creates a player object that has:

- A number of properties, such as colour, speed, position and size
- A function that can be called to draw one such object

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

### Use a player object in the code provided

To ease you into things, modify the script provided so that it uses a player object, rather than the variables x, y, width, height and speed currently used in the script. All you need to do is include the above code to the top of your script, and then use the player object where necessary, i.e., where x, y, width, etc are currently used.
Reminder: to use an object property, whether it’s a number or a function, the syntax is:

    object.property

For example, if you want to increment the player’s x coordinate, you can use:

    player.x = player.x + 1;

or equivalently:

    player.x+=1;

To call the function that draws the player, simply call:

    player.draw();


### Shooting projectiles

Creating and managing bullets is a bit more complicated as many bullets have to be managed concurrently. Therefore, we need an appropriate data structure to store all bullets that have been fired and are still active.
The bullet system is implemented for you in the script and your job is to try and make sense of it. As you can see, it is based on a bullet object defined by a constructor (function bullet(I)) that creates bullet instances.
This constructor is called whenever a bullet is fired. For us, that is when the spacebar is pressed. Note that the constructor also contains several functions that are called at various points in the code. Try to follow the code logic, and if there is anything you don’t understand, please ask your tutor/demonstrator.

### Shoot bullets downwards
In the version provided, you can only shoot bullets upwards when the spacebar is pressed. Modify the code so that one can shoot bullets upwards when the W key is pressed, and downwards when the S key is pressed.

### Taking things further

There are many things you might want to consider that are more or less difficult. For example:

- What about being able to move the player in 4 directions and then shooting in the direction of travel?
- Control the player and bullet firing orientation using the mouse
- Allow the player to do continuous shooting: if the space bar is held down, the player shoot keep firing, even if another key is pressed.
- Use sprites rather than drawing rectangles. For this, as well as other functionalities, such as spawning enemies and shooting them, check out the tutorial mentioned earlier [https://www.html5rocks.com/en/tutorials/canvas/notearsgame/](https://www.html5rocks.com/en/tutorials/canvas/notearsgame/).

## Resources

* [W3Schools JavaScript Reference](https://www.w3schools.com/jsref/)
