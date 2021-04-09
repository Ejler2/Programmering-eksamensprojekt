var canvasW = 1600;
var canvasH = 740;

var radius = 170;

var countDownStatus = false;



function setup() {
    rouletteBil = loadImage('Roulettehjul.png');
    createCanvas(canvasW, canvasH);
    frameRate(60);
}


var rotateHjul = true;
var rotateBold = true;
var degree = 0;
var degree1 = 0;
var hjulSpeed = 1;
var boldSpeed = -10;


function rotateTheHjul() {
    if (rotateHjul === true && degree === 360-hjulSpeed) {
        degree = 0;
    } else if (rotateHjul === true){
        degree += hjulSpeed;
    }
    rotate(degree); 
}

function rotateTheBold() {
    if (rotateBold === true && degree === 360-boldSpeed) {
        degree1 = 0;
    } else if (rotateBold === true) {
        degree1 += boldSpeed;
    }
    rotate(degree1); 
}

/*
class kugle {
    constructor(x, y, diam, radius, color, radian, velocity) {
        this.x = x
        this.y = y
        this.diam = diam
        this.radius = radius
        this.color = color
        this.radian = radian
        this.velocity = velocity


    }

    bevægelse() {
        this.radian += this.velocity
        this. x = x + Math.cos(this.radian) * this.radius



    }
}
let KugleBord = new kugle(canvasW/2, canvasH/2, 10, 100, 'blue')
*/

function countdown(input) {
    countDownStatus = true;
    timeLeft = input;
    if (timeLeft === 0) {
        state = 1;
        countDownStatus = false;
    }
}

function hastighedModi() {
    if (state === 1){
        hjulSpeed = -10;

    }   else if (state === 2){
        hjulSpeed = 1;
        
    }   else if (state === 3){


    }


}


function draw() {
    background(240);
    angleMode(DEGREES);
    translate(canvasW / 2, canvasH / 2);
    rotateTheHjul();
    imageMode(CENTER);
    image(rouletteBil, 0, 0, 500, 500);

    angleMode(0);
    translate(0,0);
    rotateTheBold();
    circle(radius, radius, 15);

    if(countDownStatus === true) {
        timeLeft - 1/60;
    }


    //let v0 = createVector(canvasW / 2, canvasH / 2);
    //let r1 = createVector(1,0);
    //let v1 = createVector(0*radius, 1*radius);


}