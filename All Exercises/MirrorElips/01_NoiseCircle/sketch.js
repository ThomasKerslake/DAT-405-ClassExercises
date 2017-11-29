//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_NoiseCircle

//Setup of variables
let r = 255;
let g = 255;
let b = 255;
let speed = 3;
let diameter = 50;
let x1;
let y1;
let x2;
let y2;
function setup() {
  createCanvas(500, 500);
  //On setup ellipse appears in the middle of the screen
  x1 = width/2;
  y1 = height/2;
  x2 = width/2;
  y2 = height/2;
  background(200);
}

function draw() {
  //In the following four lines of the code, we add to x1 and y1
  //a random amoung between -3 to 3 for each frame. This makes the
  //position of the shape to jiggle randomly. In addition to this,
  //the constrain function will make sure that x1 and y1 will always
  //stay within the boundaries of the sketch (0 to 500)
  x1 += random(-speed, speed);
  y1 += random(-speed, speed);
  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);


  x2 = 500 - x1;
  y2 = 500 - y1;

  //Press the mouse to change the values of r, g, b
  //which following in the fill() they control the color of the shape
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill (r, g, b, 120);
  ellipse(x1, y1, diameter, diameter);
  ellipse(x2, y1, diameter, diameter);
  ellipse(x1, y2, diameter, diameter);
  ellipse(x2, y2, diameter, diameter);
}
