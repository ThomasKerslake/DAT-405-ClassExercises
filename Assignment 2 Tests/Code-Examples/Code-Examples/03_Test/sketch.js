var input, button, greeting;

//set variables which will change the api query
var sex = "male"; //male or female
//var country = "Brazil"; //from 1920 to 2059
var date = "1989"; //http://api.population.io:80/1.0/countries
var age = "19y"

let countryArray = ["United Kingdom", "Germany", "France", "Brazil", "Italy", "Spain", "Nigeria", "Finland", "Norway"];
let locations = [];

function preload() {
  //For each position of the array, load a JSON object
  for (let i=0; i<countryArray.length; i++){
    let url = "http://api.population.io:80/1.0/life-expectancy/remaining/" + sex + "/" + countryArray[i] + "/" + date + "-01-01" + "/" + age + "/";
    locations[i] = loadJSON(url); //weather will not contain all cities' weather data
  }
}


function setup() {
  createCanvas(1280,720);
  background(0);
  noLoop();
}


function draw(){
  //set background and text colour
for (let i=0; i<locations.length; i++){
  fill(255);

  let pos = i * 142.2; //Pos is used to set the rect/text positions
  if(pos<1240){ //this runs for the top row
    rect(pos,locations[i].remaining_life_expectancy, 100,400);
    fill(0);
    text(locations[i].country, pos+10, height/4-30);
    text("Temperature: " + locations[i].remaining_life_expectancy + "°C", pos+10, height/4);
    text("Humidity: " + locations[i].age + "%", pos+10, height/4+30);
  }
  //input = createInput();
  //input.position(40, 65);
  //button = createButton('submit');
  //button.position(input.x + input.width + 10, 65);
  //button.mousePressed(sendData);
  //text("Give me your country?",40, 50);
  //textAlign(CENTER);
  //textSize(40);
  //text("Sex: " + sex, width/2, height/2+30);
  //text("Country: " + country, width/2, height/2 -130);
  //text("Year of Birth: " + date, width/2, height/2 -90);
//  text("Age: " + age, width/2, height/2 -50);
  //text("Your average remaining life expectancy left: " + data.remaining_life_expectancy, width/2, height/2 -10);
  //console log to see if the query has worked
  console.log("query complete");
  }
}

//function draw (){
//  gotData(data);
//}

//function sendData() {
  //var country = input.value();
//  input.value('');
  //console.log(country);
//  redraw();
//}
