var canvasW = 510;
var canvasH = 700;
var radius = 170;

var countDownStatus = false;
var rotateHjul = true;
var rotateBold = true;
var hjulDegree = 0;
var boldDegree = 0;
var hjulSpeed = 1;
var boldSpeed = -10;
var boldDegreeFR = 0;
var state = 0;
var vinkel = 0;
var timeLeft = 0;

function startGame() {
    console.log("Spillet starter")
    countdown(2);
}

function resetGame() {
    state = 0;
    boldDegree = 360 - ((boldDegree % 360)*(-1));
}

function rotateTheHjul() {
    rotate(hjulDegree);
    if (rotateHjul === true && hjulDegree >= 360 - hjulSpeed) {
        hjulDegree = 0;
    } else if (rotateHjul === true){
        hjulDegree += hjulSpeed;
    }
}

function rotateTheBold() {
    rotate(boldDegree);
    if (rotateBold === true && boldDegree <= -360 + boldSpeed) {
        boldDegree = 0;
    } else if (rotateBold === true) {
        boldDegree += boldSpeed;
    }
}

function countdown(input) {
    console.log("Countdown igangsat")
    countDownStatus = true;
    timeLeft = input;
}

function checkCountdown() {
    if (timeLeft <= 0 && countDownStatus === true) {
        state = 1;
        console.log("state 1");
        countDownStatus = false;
        timeLeft = 0
    } else if(countDownStatus === true) {
        timeLeft -= 1/60;
        resetCounter = 0;
    }
}


var resultatNr = 0;
var resultatFarve = "ingen";

var bank = 1000;
var betNr = 0;
var betFarve = "";
var betValue = 0;

var betValueInput = 0
var betNrInput = 0
var betFarveInput = ""
var bet = 0

function Bet() {
    if (bet > 0) {
        console.log("Der er Allerede lavet et bet")
    } else if (betValue > bank) {
        console.log("Ikke nok penge til dette sats")
    } else if (betValue <= bank) {
        betValue = betValueInput
        betNr = betNrInput;
        betFarve = betFarveInput;

        bet = betValue
        bank -= bet;
    } else {
        console.log("Fejl")
    }
}

function Casinoresultet(bet){
    if (betFarve === resultatFarve && betFarve === "grøn") {
        bet *= 35
        console.log("1")
    } else if (betNr === resultatNr){
        bet *= 35;
        console.log("2")
    } else if (betFarve === resultatFarve){
        bet *= 2;
        console.log("3")
    } else {
        bet = 0;
        console.log("4")
    }
    bank += bet;

    resultatFarve = "ingen";
    resultatNr = null;
    console.log(bank)
}


function hastighedModi() {
    if (state === 0){
        boldSpeed = -10;
    } else if (state === 1){
        boldSpeed += 0.05;
        if (boldSpeed >= 1){
            state = 2
        }
    } else if (state === 2){
        state = 3;
        boldSpeed = 1;
        if (boldDegree > 0) {
            360 - boldDegree
        } else {
            boldDegreeFR = 360 + boldDegree
        }

        if (boldDegreeFR === 360) {
            boldDegreeFR = 0
        }

        vinkel = (hjulDegree - boldDegreeFR);

        if (vinkel < 0) {
            vinkel = vinkel * (-1)
        }

        console.log(vinkel);
        console.log(hjulDegree)
        console.log(boldDegreeFR)
        console.log(boldDegree)
        Givresultat(vinkel);
        Casinoresultet(bet);
        bet = 0;
        resetCounterActive = true
        resetCounter = 0
    }
}

var nEllerF = ""
function nummerEllerFarve(){
    if (bet === 0) {
        nEllerF = "..." 
    } else if (betFarveInput === ""){
        nEllerF = betNr
    } else {
        nEllerF = betFarve
    }
}


function setup() {
    rouletteBil = loadImage('Roulettehjul.png');
    createCanvas(canvasW, canvasH);
    frameRate(60);
}

var resetCounterActive = true;
var resetCounter = 0;
function draw() {
    background(255);

    textSize(20);
    textAlign(LEFT, LEFT);
    text("Bank: " + bank + " kr.", 10, 650);
    text("Tid til næste spil: " + (20 - floor(resetCounter)) + " sekunder", 235, 650);
    textAlign(CENTER, CENTER);
    text("Du er ved at satse " + betValueInput + " kr.", canvasW/2, 20);
    text("Der er på nuværende tidspunkt satset:", canvasW/2, 45);
    textSize(30);
    text(bet + " kr.", canvasW/2, 80);
    nummerEllerFarve();
    textSize(20);
    text("på " + nEllerF, canvasW/2, 105)

    angleMode(DEGREES);
    translate(canvasW / 2, canvasH / 2 + 20);
    push()
    rotateTheHjul();
    imageMode(CENTER);
    image(rouletteBil, 0, 0, 500, 500);
    //line(0, 0, 600, 600)
    pop()
    rotateTheBold();
    circle(radius, radius, 15);
    //line(0, 0, 600, 600)
    hastighedModi();
    checkCountdown()
    
    if (resetCounterActive === true) {
        resetCounter += 1/60;
    }
    if (resetCounter > 20){
        startGame();
        resetCounterActive = false
        resetCounter = 20;
    }
    if (floor(resetCounter) === 19){
        resetGame()
    }
}
