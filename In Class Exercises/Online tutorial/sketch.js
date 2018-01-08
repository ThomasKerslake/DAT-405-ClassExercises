//https://css-tricks.com/creating-book-cover-using-javascript-p5-js/


//Setting up the canvas
function setup() {
    createCanvas(700, 700); // Canvas size
    textAlign(CENTER, CENTER); // Alignment for text (set to put text in center)
    rectMode(CENTER); // Centers the rectangle that is around the text
    angleMode(DEGREES); // Changes the default mode pf radians to DEGREES.
}

function draw() {
    background(0); // The background colour (black)

    var amount = 2; // The number of '10010110' circles around the text
    var spacing = 20; // The size of the space between each circle of '101010101'
    var radius = 260; // The radius of the circles

    for (var i = 0; i < amount; i++) { // Loop to create a new circle untill I is more than the value of 'amount'
        createNumberRing(radius + spacing * i, 100 + 20 * i, i); // creates a number ring with the set values
    }

    drawTitleText(); // Runs the drawTitleText function
    drawSubtitleText(); // Runs the drawSubtitleText function
    drawWebsite(); // Runs the drawWebsite function
}

// The function for the createNumberRing
function createNumberRing(radius, amount, seed) { // Arguments for the function to hold
    randomSeed(seed); // Sets the random function to return the same random each time the code is ran with the value of seed
    var randomNumbers = []; // Creates and Array to hold the values from randomNumbers
    for (var i = 0; i <= amount; i++) { // Loop to run untill I is more than 'amount'
        randomNumbers.push(parseInt(random(2), 10)); // .push will add the new value onto the Array
        //parseInt will select a random int between 0 to 2 but not including '2', this means 0 or 1 is be added into the array
    }

    var spacing = 360 / amount;

    push();
    translate(width / 2, height / 2);
    var rotSpeed = 0.05;
    rotate(frameCount * random(-rotSpeed, rotSpeed));

    for (var i = 0; i < amount; i++) {
        push();
        rotate(i * spacing);
        var num = new Num(randomNumbers[i], 0 + radius, 0, 90, random(50, 255));
        num.render();
        pop();
    }

    pop();
}

function Num(msg, x, y, rot, clr) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.msg = msg;
    this.color = clr;

    this.render = function() {
        push();
        fill(this.color);
        translate(this.x, this.y);
        rotate(this.rot);
        text(this.msg, 0, 0);
        pop();
    }
}

function drawTitleText() {
    push();
    translate(width / 2, height / 2);

    var scaleFactor = 0.5;
    var maxLimit = 20;
    if (frameCount < maxLimit) {
        var currentScale = map(frameCount, 0, maxLimit, 0, scaleFactor);
        scale(1.5 + currentScale);
    } else {
        scale(1.5 + scaleFactor);
    }

    strokeWeight(2);
    stroke(255);
    fill(0, 200);
    rect(0, 0, 210, 30);

    fill(255);
    noStroke();
    textFont('Arial');
    text('CODING FOR VISUAL LEARNERS', 0, 0);
    pop();
}

function drawSubtitleText() {
    push();

    translate(width/2, height/2 + 50);
    scale(1.3);

    push();
    fill('#ed225d');
    textFont('Arial');
    var msg = 'Learning JavaScript with p5.js';
    text(msg, 0, 0);
    pop();

    pop();
}

function drawWebsite() {
    push();

    translate(width/2, height * 0.95);
    scale(1.2);

    push();

    textFont('Verdana');
    var msg = 'www.whatabadewebsite.com';
    fill('#fff');
    textSize(12);
    text(msg, 0, 0);
    pop();

    pop();
}
