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
    lineArray[z] = new Line(width/2, height/2, random(-3, 3), random(-3, 3), 320, 320);
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

//Definition of the line class
class Line{

constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;
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
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    stroke(this.fillcol);
    this.x2 = map(this.x, 0, width, width, 0);
    this.y2 = map(this.x, 0, width, width, 0);
    line(this.x, this.y, this.size, this.size);
    line(this.x2, this.y, this.size, this.size);
    line(this.x, this.y2, this.size, this.size);
    line(this.x2, this.y2, this.size, this.size);
  }
}
