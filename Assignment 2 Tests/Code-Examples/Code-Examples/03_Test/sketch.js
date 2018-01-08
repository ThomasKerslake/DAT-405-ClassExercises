

//set variables which will change the api query
let sex = "male"; //male or female
let country = "United Kingdom"; //from 1920 to 2059
let date = "2017"; //http://api.population.io:80/1.0/countries
let age = "19y1m"




function setup() {
  createCanvas(600,600);
  //query the api using variables
  loadJSON("http://api.population.io:80/1.0/life-expectancy/remaining/" + sex + "/" + country + "/" + date + "-01-01" + "/" + age + "/", gotData);
  //set text size
  textSize(18);
  noLoop();
}

function gotData(data){
  //set background and text colour
background(0);
  fill(255);
  text("Sex: " + sex, width/2-160, height/2);
  text("Country " + country, width/2-160, height/2 -120);
  text("Current Date " + date, width/2-160, height/2 -90);
  text("Current Age " + age, width/2-160, height/2 -60);
  text("Your average remaining life expectancy left: " + data.remaining_life_expectancy, width/2-160, height/2 - 30);
  //console log to see if the query has worked
  console.log("query complete");
}
