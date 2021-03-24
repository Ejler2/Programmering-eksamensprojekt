var canvasW = 1600
var canvasH = 740

function setup() {
    rouletteBil = loadImage('Roulettehjul.png');

    createCanvas(canvasW, canvasH);
    frameRate(60);
}


var rotateHjul = true
var degree = 0
var hjulSpeed = 1/3

function rotateTheHjul (){
    if (rotateHjul === true && degree === 360-hjulSpeed){
        degree = 0
    } else if (rotateHjul === true){
        degree += hjulSpeed
    }
    rotate(degree);
}

var radius = 10





//console.log(acos(  ))


function draw() {
    angleMode(DEGREES);
    background(204);
    translate(canvasW / 2, canvasH / 2);
    rotateTheHjul();
    imageMode(CENTER);
    image(rouletteBil, 1, 1, 500, 500);

    let v0 = createVector(canvasW / 2, canvasH / 2);
    let r1 = createVector(1,0);
    let v1 = createVector(0*radius, 1*radius);


}