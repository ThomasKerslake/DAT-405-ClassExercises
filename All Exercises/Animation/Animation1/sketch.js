// Where is the circle
var x, y;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width;
  y = height / 2;
}

function draw() {
  background(150);

  // Draw a circle
  stroke(50);
  fill(123,213,231);
  ellipse(x, y, 24, 24);

  // Jiggling randomly on the horizontal axis

  // Moving up at a constant speed
  x = x - 1;

  // Reset to the bottom
  if (x < 0) {
    x = width;
  }
}
