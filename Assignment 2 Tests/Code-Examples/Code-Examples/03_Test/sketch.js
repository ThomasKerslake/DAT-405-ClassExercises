//http://api.openweathermap.org

//In this example, the weather variable is an array. Each position will store
//an individual city. Therefore, by using a for loop we can load and process them all







function setup() {
  createCanvas(600, 600);
  loadJSON("courts.json", gotData);
  textSize(18);
  noLoop();
}

function gotData(data){
  background(0);
  for (var i = 0; i < data.main.temp; i++){
    fill(255);
    ellipse(random(width), random(height),16,16);
    console.log("wewewewewe");
  }
    }
