var canvasW = 1600;
var canvasH = 740;

var radius = 170;




function setup() {
    rouletteBil = loadImage('Roulettehjul.png');
    createCanvas(canvasW, canvasH);
    frameRate(60);
}

var countDownStatus = false;
var rotateHjul = true;
var rotateBold = true;
var hjulDegree = 0;
var boldDegree = -3.6;
var hjulSpeed = 1;
var boldSpeed = -10;

var state = 0


function rotateTheHjul() {
    if (rotateHjul === true && hjulDegree === 360-hjulSpeed) {
        hjulDegree = 0;
    } else if (rotateHjul === true){
        hjulDegree += hjulSpeed;
    }
    rotate(hjulDegree); 
}

function rotateTheBold() {
    if (rotateBold === true && boldDegree <= -360+boldSpeed) {
        boldDegree = 0;
    } else if (rotateBold === true) {
        boldDegree += boldSpeed;
    }
    rotate(boldDegree); 
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

function startGame() {
    console.log("Spillet starter")
    countdown(2);
    state = 0;
}

var timeLeft = 0;

function countdown(input) {
    console.log("Countdown igangsat")
    countDownStatus = true;
    timeLeft = input;
}

function hastighedModi() {
    if (state === 0){
        boldSpeed = -10;
    }   else if (state === 1){
            boldSpeed += 0.05;
            if (boldSpeed >= 0){
                state = 2
            }
    }   else if (state === 2){
        boldSpeed = 0;
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

    
    if (timeLeft <= 0 && countDownStatus === true) {
        state = 1;
        console.log("state 1");
        countDownStatus = false;
    }   else if(countDownStatus === true) {
            console.log("===");
            timeLeft -= 1/60;
            console.log(timeLeft);
        }



    hastighedModi()
}