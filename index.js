var gameBoard = document.querySelector('.game-board');
let pumpkinFrequency = randomTime(800, 1500);
let halloweenPumpkinFrequency = randomTime(800, 1500);

//Create function to make a random time for Pumpkins to pop from the ground 
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

//Create a function to create and push DIV elements (Pumpkins) - and to remove it after X second
var pumpkin = setInterval(function pumpkinAppear() {
    var $div = document.createElement("div");
    document.body.appendChild($div); // push in gameboard only not in body
    
    $div.classList.add("pumpkinSpot");
    $div.style.left = `${randomTime(0, window.innerWidth)}px`; //can innerWidth and innerHeight be limited to gameboard dimensions?
    $div.style.top = `${randomTime(0, window.innerHeight)}px`;

    setTimeout(function(){
        $div.remove();
      }, randomTime(1000, 2000));

    $div.addEventListener("click", function () {
        $div.remove();
    });

}, pumpkinFrequency);

//Create a function to create and push DIVH elements (Halloween Pumpkins) 
var halloweenPumpkin = setInterval(function halloweenPumpkinAppear() {
    var $divH = document.createElement("div");
    document.body.appendChild($divH); // push in gameboard only not in body
    
    $divH.classList.add("halloweenPumpkinSpot");
    $divH.style.left = `${randomTime(0, window.innerWidth)}px`; //can innerWidth and innerHeight be limited to gameboard dimensions?
    $divH.style.top = `${randomTime(0, window.innerHeight)}px`;

    setTimeout(function(){
        $divH.remove();
      }, randomTime(1000, 2000));

        $divH.addEventListener("click", function () {
        clearInterval(halloweenPumpkin);
        clearInterval(pumpkin);
        document.getElementById("myPopup").classList.toggle("show");
    });

}, halloweenPumpkinFrequency);

//Create a function to start a new game
const startButton = document.querySelector(".start-btn");
startButton.addEventListener("click", function () {
    console.log ("Test Start Button");
});