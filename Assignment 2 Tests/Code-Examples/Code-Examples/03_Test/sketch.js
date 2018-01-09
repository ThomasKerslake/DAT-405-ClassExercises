var input, button, greeting;

//set variables which will change the api query
var sex = "male"; //male or female
var country = "Brazil"; //from 1920 to 2059
var date = "1989"; //http://api.population.io:80/1.0/countries
var age = "19y"




function setup() {
  createCanvas(1280,720);
  //query the api using variables
  loadJSON("http://api.population.io:80/1.0/life-expectancy/remaining/" + sex + "/" + country + "/" + date + "-01-01" + "/" + age + "/", gotData);
}


function gotData(data){
  //set background and text colour
background(0);
  fill(255);
  input = createInput();
  input.position(40, 65);
  button = createButton('submit');
  button.position(input.x + input.width + 10, 65);
  button.mousePressed(sendData);
  text("Give me your country?",40, 50);
  textAlign(CENTER);
  textSize(40);
  text("Sex: " + sex, width/2, height/2+30);
  text("Country: " + country, width/2, height/2 -130);
  text("Year of Birth: " + date, width/2, height/2 -90);
  text("Age: " + age, width/2, height/2 -50);
  text("Your average remaining life expectancy left: " + data.remaining_life_expectancy, width/2, height/2 -10);
  //console log to see if the query has worked
  console.log("query complete");
  }

function draw (){
  gotData(data);
}

function sendData() {
  var country = input.value();
  input.value('');
  console.log(country);
  redraw();
}
