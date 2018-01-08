//http://api.openweathermap.org

//In this example, the weather variable is an array. Each position will store
//an individual city. Therefore, by using a for loop we can load and process them all
let locationArray = ["Plymouth", "London", "Paris", "Berlin", "Athens", "Shanghai"];
let apiKey = "6b4a465ac9894c63172283b3f271c20c";
let weather = [];

function preload() {
  //For each position of the array, load a JSON object
  for (let i=0; i<locationArray.length; i++){
    let url = "http://api.openweathermap.org/data/2.5/weather?q="+locationArray[i]+"&units=metric&appid="+apiKey;
    weather[i] = loadJSON(url); //weather will not contain all cities' weather data
  }
}

function setup() {
  createCanvas(600, 600);
  textSize(18);
  noLoop();
}

function draw() {
  let mapColor = [];

  //To display, loop through all array elements
  for (let i=0; i<weather.length; i++){
    //The conditionals will make sure that for every city, the color assigned
    //will be only one, according to the current temperature
    if (weather[i].main.temp<-5){
      mapColor[i] = color(36, 194, 203, 255);
    } else if (weather[i].main.temp>-5 && weather[i].main.temp<5){
      mapColor[i] = color(196, 208, 234, 255);
    } else if (weather[i].main.temp>5 && weather[i].main.temp<10){
      mapColor[i] = color(234, 231, 222, 255);
    } else if (weather[i].main.temp>10 && weather[i].main.temp<20){
      mapColor[i] = color(234, 208, 155, 255);
    } else if (weather[i].main.temp>20){
      mapColor[i] = color(234, 143, 0, 255);
    }

    //Here we create a visual grid
    let pos = i * 200; //Pos is used to set the rect/text positions
    if(pos<600){ //this runs for the top row
      fill(mapColor[i]);
      rect(pos, 0, width/2, height/2)
      fill(0);
      text(weather[i].name, pos+10, height/4-30);
      text("Temperature: " + weather[i].main.temp + "°C", pos+10, height/4);
      text("Humidity: " + weather[i].main.humidity + "%", pos+10, height/4+30);
    } else { //this runs for the bottom row
      fill(mapColor[i]);
      rect(pos-600, height/2, width/2, height/2)
      fill(0);
      text(weather[i].name, pos-600+10, height-150-30);
      text("Temperature: " + weather[i].main.temp + "°C", pos-600+10, height-150);
      text("Humidity: " + weather[i].main.humidity + "%", pos-600+10, height-150+30);
    }
  }
}
