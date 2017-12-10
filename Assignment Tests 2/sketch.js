//Creating the Array called 'lineArray'
var lineArray = [];
//Setting the size of the array to 10
var arraySize = 10;
//Setting up the boolean for my area detection
var clickArea;
//Setting up the boolean for my clear canvas function
var cleanUp = false;


//Setting up the canvas for the creative code to be displayed on
function setup() {
  createCanvas(594, 841);
    background(231,255,255);
        //Sets up a loop to create a new line for the size of the array (10) 
        for (let z=0; z<arraySize; z++){
            //Sets the array, 'lineArray', to be equal to (hold) the value of 'i'
            lineArray[z] = new Line(297, 420, random(-4, 4), random(-4, 4), 320);
            }
}

//Setting up the draw function
function draw() {
    
//This is checking the mouses position for both the x/y cords to see it its within the
//area I have limited it to (x of 0 to 594, and y of 0 to 841)
if(mouseX >= 0 && mouseX <= 0+594 && mouseY >= 0 && mouseY <= 0+841){
    clickArea = true;
} 
else{
   clickArea = false;
}

//Checking if 'clickArea' is equal to true, then if 'cleanUp' is equal to true.
//If both are true then it will continuously update the background colour with the
//set colour, creating this effect of clearing all previous lines that have been drawn.
if(clickArea == true){ //This has been set so the user can only 'clearUp' if their mouse is over the canvas.
   if(cleanUp == true){   
       background(231,255,255);            //** See lines '52' to '64' for the related functions**
   }
}

    
//Sets up a loop to display equal to the number of 'units' in the string in 'lineArray'
  for (let z=0; z<lineArray.length; z++){
//Makes the array adhere to both the functions, 'moveLineFunction' and 'drawLineFunction'
    lineArray[z].moveLineFunction();
    lineArray[z].drawLineFunction();
  }
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
    cleanUp = true;
    }
    return false;   
}

function keyReleased(){
    if(keyCode === RIGHT_ARROW){
    cleanUp = false;
    }
    return false;   
}


//The setup for my line class
class Line{

constructor(x1, y1, speedX, speedY, size){
    //Setup of the line class' variables
    // 'this.' is used as they refer directly to the object, also it allows them to be used within other functions (public).
    this.x1 = x1;
    this.y1 = y1;
    this.speedX = speedX;
    this.speedY = speedY;

    //Setting up the random value selection to be used in a fill() function. 
    this.Red = random(255);
    this.Green = random(255);
    this.Blue = random(255);
    
    //Setting up the size and the value for the opacity of each line (255 = full)
    this.Alpha = 255;
    this.size = size;
  }

  //A function that takes care of movement of the lines and collision with the sides of the canvas
moveLineFunction(){
    //Motion system - current position and speed
    this.x1 = this.x1 + this.speedX;
    this.y1 = this.y1 + this.speedY;
    
    if(keyIsDown(LEFT_ARROW)){
    this.speedX = this.speedY;
    this.speedY = this.speedX;
    }
    
    else if(keyIsDown(UP_ARROW)){
    this.speedX = this.speedX +1;
    this.speedY = this.speedY +1;
    }
    
    else if(keyIsDown(DOWN_ARROW)){
    this.speedX =  3;
    this.speedY =  -2;
    }

    //Based on boundaries collision, reverse direction for x and y
    if (this.x1 > width || this.x1 < 0){
      this.speedX *= -1;
    }
    if (this.y1 > (height) || this.y1 < 0){
      this.speedY *= -1;
    }
  }

  //Class function that displays the lines and their reflected partner
drawLineFunction(){
    this.fillcol = color(this.Red, this.Green, this.Blue, this.Alpha);
    fill(this.fillcol);
    stroke(this.fillcol);
    this.x2 = map(this.x1, 0, width, width, 0);
    this.y2 = map(this.y1, 0, height, height, 0);
    line(this.x1, this.y1, this.size, this.size);
    line(this.x2, this.y2, this.size, this.size);
    line(this.x2, this.y1, this.size, this.size);
    line(this.x1, this.y2, this.size, this.size);
    
  }
}
