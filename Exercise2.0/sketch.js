//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color


function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(300); //Drawing speed
  noStroke();
}

function draw() {
    stroke(random(255), random(255), random(255));
    let size = random(50, 100);

 

      fill(random(255), random(255), random(255));
      if(mouseIsPressed){
      ellipse(mouseX, mouseY, size, size);
    }

    
}
