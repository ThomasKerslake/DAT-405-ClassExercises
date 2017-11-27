//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//03_NestedForLoop - Visual

let size = 50;
let cent = 13;
var colval = 0;

function setup() {
  createCanvas(500, 500);
  
}

function mouseMoved(){
    colval = colval + 5;
    if (colval > 255){
        colval =0;
    }
}

function draw() {
    

  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the shape at the corresponding position
      //This will generate a dynamic position for the x and y
      //The shape is redrawn as many times as the loop says (in this case 100)
        fill(215, 200, 170);
        rect(size * x, size * y, size, size);
        
        
        fill(random(colval), random(colval),random(colval));
        rect(size* x +13 , size * y + 13, 25, 25);
    }     
  }  
}
