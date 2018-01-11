var input, button, greeting;

//set variables which will change the api query
var sex = "male"; //male or female
//var country = "Brazil"; //from 1920 to 2059
var date = "2017"; //http://api.population.io:80/1.0/countries
var age = "10y"

let countryArray = ["Uganda", "Germany", "France", "Brazil", "Italy", "Spain", "Nigeria", "Finland", "Norway"];
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
  frameRate(60);
  x = 1;
  y = height;
}


function draw(){
  //set background and text colour
var colourInfo = [];
for (let i=0; i<locations.length; i++){

  if (locations[i].remaining_life_expectancy < 20){
    colourInfo[i] = color(247, 19, 19, 255);
  }else if (locations[i].remaining_life_expectancy < 50){
      colourInfo[i] = color(244, 92, 66, 255);
  } else if (locations[i].remaining_life_expectancy < 55){
    colourInfo[i] = color(244, 140, 65, 255);
  } else if (locations[i].remaining_life_expectancy < 60){
    colourInfo[i] = color(244, 184, 65, 255);
  } else if (locations[i].remaining_life_expectancy < 65){
    colourInfo[i] = color(244, 241, 65, 255);
  } else{
    colourInfo[i] = color(169, 244, 65, 255);
  }

  let pos = i * 80; //Pos is used to set the rect/text positions
  if(pos<720){ //this runs for the top row
    fill(colourInfo[i]);
    x = x + 1;
    if(x > locations[i].remaining_life_expectancy + 400){
      x = locations[i].remaining_life_expectancy + 400;
      noLoop();
    }
    console.log(x);
    rect(50,pos + 10, x,50);
    fill(0);
    textSize(30)
    text(locations[i].country,height/4-120,pos+45);
    textSize(12)
    text("Remaining life: " + round(locations[i].remaining_life_expectancy) + " years", height/4 + 50, pos+25);
    text("Date: " + locations[i].date , height/4 + 50, pos+40);
    text("Age: " + locations[i].age , height/4 + 50, pos+55);
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
