//Creating the Array called 'lineArray'
var lineArray = [];
//Setting the size of the array to 10
var arraySize = 10;

//Setting up the canvas for the creative code to be displayed on
function setup() {
  createCanvas(594, 841);
//Sets up a loop to create a new line for the size of the array (10) 
  for (let z=0; z<arraySize; z++){
//Sets the array, 'lineArray', to be equal to (hold) the value of 'i'
    lineArray[z] = new Line(297, 420, random(-4, 4), random(-4, 4), 320);
  }
}


//Setting up the draw function
function draw() {
//Sets up a loop to display equal to the number of 'units' in the string in 'lineArray'
  for (let z=0; z<lineArray.length; z++){
//Makes the array adhere to both the functions, 'moveLineFunction' and 'drawLineFunction'
    lineArray[z].moveLineFunction();
    lineArray[z].drawLineFunction();
  }
}

//The setup for my line class
class Line{

constructor(x, y, speedX, speedY, size){
    //Setup of the line class' variables
    // 'this.' is used as they refer directly to the object, also it allows them to be used within other functions (public).
    this.x = x;
    this.y = y;
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
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  //Class function that displays the lines and their reflected partner
drawLineFunction(){
    this.fillcol = color(this.Red, this.Green, this.Blue, this.Alpha)
    fill(this.fillcol);
    stroke(this.fillcol);
    this.x2 = map(this.x, 0, width, width, 0);
    this.y2 = map(this.x, 0, width, width, 0);
    line(this.x, this.y, this.size, this.size);
    line(this.x2, this.y2, this.size, this.size);
    line(this.x2, this.y, this.size, this.size);
    line(this.x, this.y2, this.size, this.size);
  }
}
