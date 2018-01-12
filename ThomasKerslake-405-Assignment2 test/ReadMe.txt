<------------ MY PROJECT --------------->

Created by Thomas Kerslake

** READ ME FILE **
- This file has all of the information you can use to find out how to use the application, and other general information
such as what the project is and the process I went through while making it.


** WHAT IS THIS PROJECT? **
- This project is all about creative coding. This is using code to create / generate live artwork.
My project uses data from an API to create a visual representation of data gathered the API.
The API I am using uses JSON to store information about remaining life expectancies of a person based off of their sex, date of birth,
country they live in and their current age. I have used information from this API to generate an abstract representation of
data related remaining life expectancies.

** THE DEVELOPMENT **
- Before settling with the current work that can be found either in this folder, or located on my git hub page I made a few iterations before
coming to this point in the projects life. My initial idea was to simply show the data off in a form of bar chart that would
use data from the API to alter how long each bar was (showing the 'remaining_life_expectancy').I had began to animate it,
making the bars move up and down based off of the data it was reading. I then made it so that each bar of the bar chart would have data placed onto
it for the user to read (it would state which country and related data such as the 'remaining_life_expectancy' for each bar). I then also set it so that
if the data was above or below a certain value, the bar would change colour (Red, Yellow, Green / Bad, Okay, Good).However I started to lean more in favour of
creating a more abstract piece.I took inspiration form what are called 'Orbs' that can be captured while taking photographs. These are small circular spheres
or 'artifacts' of bright light that can be captured by a camera when using a flash (commonly caused by rain) as light can reflect off of the rain drops.
I used this inspiration to then create the reflecting / bouncing spheres on the screen and make them look similar to 'orbs'. From there I moved onto creating
the 'orbs' that would float / bounce around the canvas. The number of 'orbs' on the canvas at one time would be based off of the value of a 'remaining_life_expectancy',
this would be calculated by the API after inputting a country, age, date of birth and current age. I then decided that rather than just random 'orbs' bouncing
all over the canvas I would improve the aesthetics by giving them reflection to follow as they move around the canvas. Finally I added text fields to the canvas
to show what data was being taken from the API to the user.

** HOW TO USE THIS DIRECTORY **
-The Images-Of-Project folder holds randomly generated images of what the project has produced.
-The Project folder holds the actual project
-The ThomasKerslake-405-Report holds my report for this project.


** HOW IT WORKS **
-Bellow is listed all of the actions / interactions you can perform on the page.

Use the  (Up Arrow) to increase the speed of the lines.
Use the  (Left Arrow) to invert the direction of the lines.
Use the  (Down Arrow) to reset the speed of the lines to a base 'regular' value.
