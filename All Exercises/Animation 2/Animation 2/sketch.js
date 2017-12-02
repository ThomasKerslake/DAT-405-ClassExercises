let y;
let speedX;
let speedY;
let r;
let g;
let b;

function setup(){
  createCanvas(841, 594);
  x = width/2;
  y = height/2;
  speedX = random(100);
  speedY = random(100);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw(){
 var BGC = background(100);

    
  x += speedX;
  y += speedY;


        
  if (x>816) {
    speedX = -speedX;
    r = random(255);
    g = random(255);
    b = random(255);
  }


  if (x<25) {
    speedX = -speedX;
    r = random(255);
    g = random(255);
    b = random(255);
  }


  if (y>569) {
  speedY = -speedY;
  r = random(255);
  g = random(255);
  b = random(255);
  }

  if (y<25) {
  speedY = -speedY;
  r = random(255);
  g = random(255);
  b = random(255);
  }

var BGC = fill(r,g,b);
    for (let t = 0; t < 50; t++) {
    for (let v = 0; v < 50; v++) {

  fill(r,g,b);
  ellipse(x * v, y * t, 50, 50);
        
    }
}
}