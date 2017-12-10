// Where is the circle
var x;
var y;
let size = 25;

let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = 0;
  y = 0;
}

function draw() {
  background(150);

  // Draw a circle
  stroke(50);
  fill(r,g,b);

  ellipse(x, y, size, size);

  // Jiggling randomly on the horizontal axis

  // Moving up at a constant speed
  x = x + 10;
  y = y + 10;

  // Reset to the bottom
  if (x > width && y > height) {
    x = random(300,-300);
    y = 0;
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
