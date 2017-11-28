function setup() {
  createCanvas(500, 500);
  backgroundColor = color(0, 0, 0);
}

function draw() {
  background(backgroundColor);

  var mouse1 = map(mouseX, 0, width, 0, 255);
  var mouse2 = map(mouseY, 0, height, 0, 255);
  var mouse3 = map(mouseX, 0, width, 255, 0);
  var mouse4 = map(mouseY, 0, width, 255, 0);

r = color(255,0,0, mouse1);
g = color(0,255,0, mouse2);
b = color(0,0,255, mouse3);
y = color(255,255,0, mouse4);

fill(r);
  var rect1 = rect(0,0,250,250);
  fill(g);
  var rect2 = rect(250,0,250,250);
  fill(b);
  var rect3 = rect(250,250,250,250);
  fill(y)
  var rect4 = rect(0,250,250,250);
}
