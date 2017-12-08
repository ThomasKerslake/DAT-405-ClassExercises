//Create two variables that will store the new objects from the class Circle
var lineArray = [];
var arraySize = 10;

function setup() {
  createCanvas(594, 841);
  for (let i=0; i<arraySize; i++){
    lineArray[i] = new Line(width/2, height/2, random(-3, 3), random(-3, 3), 320, 320);
  }
}

function draw() {

  for (let i=0; i<lineArray.length; i++){
    lineArray[i].moveFunction();
    lineArray[i].displayLine();
  }
}

//Definition of the class Circle
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

  //Class function that takes care of motion and collision
  moveFunction(){
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

  //Class function that displays the ellipse
  displayLine(){
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
