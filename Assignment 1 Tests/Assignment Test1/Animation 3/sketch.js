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
  speedX = (10);
  speedY = (10);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw(){
    var size = random(10, 100);
    
    
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


    for (let t = 0; t < 50; t++) {
    for (let v = 0; v < 50; v++) {

  fill(r,g,b);
  rect(x  * t, y * v, size, size);
        
    }
}
}