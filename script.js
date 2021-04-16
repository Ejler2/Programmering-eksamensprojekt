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
var hjulDegree = 0;
var boldDegree = -3.6;
var hjulSpeed = 0;
var boldSpeed = 0;

//(-3.6 < nrElleve < -3.6 + 360/3
//(-3.6 + (360/37)*2 < nr30 < -3.6 + (360/37)*2
//(-3.6 + (360/37)*3 < nr30 < -3.6 + (360/37)*3
//(-3.6 + (360/37)*4 < nr30 < -3.6 + (360/37)*4
//(-3.6 + (360/37)*5 < nr30 < -3.6 + (360/37)*5
//(-3.6 + (360/37)*6 < nr30 < -3.6 + (360/37)*6
//(-3.6 + (360/37)*7 < nr30 < -3.6 + (360/37)*7
//(-3.6 + (360/37)*8 < nr30 < -3.6 + (360/37)*8
//(-3.6 + (360/37)*9 < nr30 < -3.6 + (360/37)*9
//(-3.6 + (360/37)*10 < nr30 < -3.6 + (360/37)*10
//(-3.6 + (360/37)*11 < nr30 < -3.6 + (360/37)*11
//(-3.6 + (360/37)*12 < nr30 < -3.6 + (360/37)*12
//(-3.6 + (360/37)*13 < nr30 < -3.6 + (360/37)*13
//(-3.6 + (360/37)*14 < nr30 < -3.6 + (360/37)*14
//(-3.6 + (360/37)*15 < nr30 < -3.6 + (360/37)*15
//(-3.6 + (360/37)*16 < nr30 < -3.6 + (360/37)*16
//(-3.6 + (360/37)*17 < nr30 < -3.6 + (360/37)*17
//(-3.6 + (360/37)*18 < nr30 < -3.6 + (360/37)*18
//(-3.6 + (360/37)*19 < nr30 < -3.6 + (360/37)*19
//(-3.6 + (360/37)*20 < nr30 < -3.6 + (360/37)*20
//(-3.6 + (360/37)*21 < nr30 < -3.6 + (360/37)*21
//(-3.6 + (360/37)*22 < nr30 < -3.6 + (360/37)*22
//(-3.6 + (360/37)*23 < nr30 < -3.6 + (360/37)*23
//(-3.6 + (360/37)*24 < nr30 < -3.6 + (360/37)*24
//(-3.6 + (360/37)*25 < nr30 < -3.6 + (360/37)*25
//(-3.6 + (360/37)*26 < nr30 < -3.6 + (360/37)*26
//(-3.6 + (360/37)*27 < nr30 < -3.6 + (360/37)*27
//(-3.6 + (360/37)*28 < nr30 < -3.6 + (360/37)*28
//(-3.6 + (360/37)*29 < nr30 < -3.6 + (360/37)*29
//(-3.6 + (360/37)*30 < nr30 < -3.6 + (360/37)*30
//(-3.6 + (360/37)*31 < nr30 < -3.6 + (360/37)*31
//(-3.6 + (360/37)*32 < nr30 < -3.6 + (360/37)*32
//(-3.6 + (360/37)*33 < nr30 < -3.6 + (360/37)*33
//(-3.6 + (360/37)*34 < nr30 < -3.6 + (360/37)*34
//(-3.6 + (360/37)*35 < nr30 < -3.6 + (360/37)*35
//(-3.6 + (360/37)*36 < nr30 < -3.6 + (360/37)*36
//(-3.6 + (360/37)*0 < nr30 < -3.6 + (360/37)*0



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
    countdoen(10);
    state = 0;
}

function countdown(input) {
    countDownStatus = true;
    timeLeft = input;
    if (timeLeft === 0) {
        state = 1;
        countDownStatus = false;
    }
}

function hastighedModi() {
    if (state === 0){
        boldSpeed = -10;
    }   else if (state === 1){
        boldSpeed += 0.05;
    }   else if (state === 2){
        boldSpeed = 0;
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

    //console.log(boldDegree);
    console.log(hjulDegree - boldDegree);


    if(countDownStatus === true) {
        timeLeft - 1/60;
    }


    //let v0 = createVector(canvasW / 2, canvasH / 2);
    //let r1 = createVector(1,0);
    //let v1 = createVector(0*radius, 1*radius);


}