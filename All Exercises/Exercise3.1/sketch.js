var rectColour;
var rectColour2;
var rectColour3;
var rectColour4;
var overRect;
var overRect2;
var overRect3;
var overRect4;
 
function setup() {
  // set canvas size
  createCanvas(windowWidth, windowHeight);
  
  // default background color
  backgroundColor = color(255, 255, 255);
}
 
function draw() {
  background(backgroundColor);
    
 
  // check if mouse is inside the rectangle
  // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
  if (mouseX >= 250 && mouseX <= 250+100 && mouseY >= 150 && mouseY <= 150+100) {
    overRect = true;  
  } 
    else {
    overRect = false;
  }
  
    if (mouseX >= 450 && mouseX <= 450+100 && mouseY >= 150 && mouseY <= 150+100) {
    overRect2 = true;  
  } 
    else {
    overRect2 = false;
  }
    
    if (mouseX >= 650 && mouseX <= 650+100 && mouseY >= 150 && mouseY <= 150+100) {
    overRect3 = true;  
  } 
    else {
    overRect3 = false;
  }
    
     if (mouseX >= 850 && mouseX <= 850+100 && mouseY >= 150 && mouseY <= 150+100) {
    overRect4 = true;  
  } 
    else {
    overRect4 = false;
  }
    
  // draw a rectangle
    
  rectMode(CORNER);
  stroke(0);
  strokeWeight(5);
  rect(250, 150, 100, 100);
   
    
    // draw a rectangle
    
  rectMode(CORNER);
  stroke(0);
  strokeWeight(5);
  rect(450, 150, 100, 100);
   
    
    // draw a rectangle
    
  rectMode(CORNER);
  stroke(0);
  strokeWeight(5);
  rect(650, 150, 100, 100);
    
    
    
    // draw a rectangle
    
  rectMode(CORNER);
  stroke(0);
  strokeWeight(5);
  rect(850, 150, 100, 100);
    
  
}
 
function mouseMoved()
{
  if(overRect == true)
  {
    rectColour = fill(random(255), random(255), random(255));
  }
     
    if(overRect2 == true)
  {
    rectColour2 = fill(random(255), random(255), random(255));
  }
    
    if(overRect3 == true)
  {
    rectColour3 = fill(random(255), random(255), random(255));
  }
    
    if(overRect4 == true)
  {
    rectColour4 = fill(random(255), random(255), random(255));
  }
    
}

