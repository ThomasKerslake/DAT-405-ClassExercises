//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color


function setup() {
  var canvas = createCanvas(841, 594);
  noLoop();
  noStroke();
  canvas.class("myCanvas");
  canvas.parent("myContainer");
}



function draw() {
    background(255, 130, 130)
    noLoop();
    let Elsize = random(40, 20);


for(let x=0; x < 17; x++){
    for(let y=0; y < 17; y++){

    noLoop();
    stroke(255);
    strokeWeight(10);

    noFill();
    rect(random(windowWidth),random(windowHeight),random(200), Elsize, Elsize, Elsize);
    rotate(random(100));


        }



    }
}
