# Session #6 Sprites

Let’s conclude this semester by learning how to make things look a little more visually interesting using images. Drawing an image isn’t more difficult than drawing a rectangle, but it gets more interesting when several images have to be drawn in a sequence to create 2D animations. The objectives of this session are for you to

* Learn how to use images to represent various elements of a 2D game, from characters to environments
* Use images as sprites to represent characters or other moving elements

The project provided this week already includes a working foundation: the character is represented by an image. However, it is the same image at all times. Let’s go through the process of drawing that image:

1. Create an image object. For example:

    var sprite = new Image();

2. Specify the image file location:

    sprite.src = ".\\images\\character\\front.png";

3. Draw the image to the canvas:

    ctx.drawImage(sprite, x, y, width, height);

The above code would draw the specified image at position (x,y) and give the image a dimension of width by height. This is all you need to know to populate your scene with images that represent things like obstacles, etc
Your first task is to examine the code to see where similar statements have been made. What you should notice is this:

* The player object definition has been modified:
    * Two attributes have been added: idleSprite and jumpSprite. They are images used to hold the sprites for the idle and jump states of the character.
    * The draw function of the player object has been modified. At the moment, the character is only drawn in its idle state.
    * The locations of the sprite files are specified towards the bottom of the code, just above the game loop.

The second task is to modify the code so that the jump sprite is drawn when the character jumps.

The third and final task is more challenging. In fact, I wouldn’t expect you to be able to complete it without tips. But it’s the end of the semester, so let’s be brave! I would like you to draw a walk animation when the character is moving left or right. If you look in the image/character/walk folder of the project, you will find 11 images that represent a walk animation cycle. To create an animation from these images, you need to display each of these at every frame during which the character is moving left or right. If you feel like you can do this without further guidance, go ahead, if not, here’s how you should approach the problem. As I’ve said before, this is one of the key skills that a programmer needs to develop: breaking a complex problem down into a sequence of smaller achievable tasks. Here’s what I’d do if I were you:

1. Draw walk0001.png when the character moves left or right
2. Work out how to display an image whose name is linked to the frame number. This is
complex, so you need to break it down as follows:
    a. Create a variable that represents the current frame. This variable is incremented in the game loop. Let’s say that you call that variable n. You should add an n++; statement to the game loop
    b. Pass that variable as a parameter to the draw function.
    c. Pass that variable as a parameter to the draw function of the player object.
    d. Now, you’ve got all the data you need in the player’s draw function to draw the correct image at a given frame. I’m not saying that it is easy, but with the following tips, you might be able to pull it off.

Tip 1: In javascript, the remainder operator is %. For example, n % 11 is the remainder of the division of n by 11. Could this be useful?
Tip 2: A number n can be converted to a string s like this: s = n.toString(); 
Tip 3: You are very likely to need to use the following function at some point:

    // ensures that a string is padded with as many 0s as needed so that the length of the output is 4
    // ex: pad("1") returns "0001"
    // ex: pad("10") returns "0010"
    function pad(s){
        var pad = "0000";
        return pad.substring(0, pad.length - s.length) + s;
    }

Good luck and have fun with the process. I hope that tackling these problems will have given you a taste for going further. Although you are at the start of the journey as far learning to programme is concerned, there is a lot you could do and learn with a bit of imagination ...
Final note: the images used in this project were downloaded for free from:
[https://opengameart.org/](https://opengameart.org/)


## Resources

* [W3Schools JavaScript Reference](https://www.w3schools.com/jsref/)
