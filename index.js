var pumpkinSpot = [`pumpkinSpotA`, `pumpkinSpotB`, `pumpkinSpotC`];
var halloweenPumpkinSpot = [`halloweenPumpkinSpotA`, `halloweenPumpkinSpotB`, `halloweenPumpkinSpotC`];
var gameBoard = document.querySelector('.game-board');
var scorePoints = document.querySelector('.game-score');
var startButton = document.querySelector('#start-btn');
var mainAudio = new Audio ('/Images and Sounds/Covid Come Not Near - Nat Keefe & Hot Buttered Rum.mp3');
var wrongClickAudio = new Audio ('/Images and Sounds/VOXLaff_Rire strident (ID 0489)_LS.mp3'); 
let pumpkinFrequency = randomTime(800, 1500);
let halloweenPumpkinFrequency = randomTime(800, 1500);
let score = 0;



//Create function to make a random time for Pumpkins to pop from the ground 
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

//Create a function to initiate game when clicking "Go Pick Pumpkins"
startButton.addEventListener("click", function () {
    document.getElementById("myPopup").classList.toggle("hide");
    document.querySelector(".game-scoreboard").style.removeProperty('visibility')

    //mainAudio.play();
    //Create a function to create and push DIV elements (Pumpkins) - and to remove it after X second
    var pumpkin = setInterval(function pumpkinAppear() {
        var $div = document.createElement("div");
        document.body.appendChild($div);
        
        $div.classList.add(pumpkinSpot[Math.floor(Math.random() * pumpkinSpot.length)]);
        $div.style.left = `${randomTime(gameBoard.getBoundingClientRect().left, gameBoard.getBoundingClientRect().width)}px`;
        $div.style.top = `${randomTime(gameBoard.getBoundingClientRect().top, gameBoard.getBoundingClientRect().height)}px`;

        setTimeout(function(){
            $div.remove();
        }, randomTime(1000, 2000));

        $div.addEventListener("click", function () {
            $div.remove();
            score += 10;
            scorePoints.innerHTML = score
        });
    }, pumpkinFrequency);

    //Create a function to create and push DIVH elements (Halloween Pumpkins) 
    var halloweenPumpkin = setInterval(function halloweenPumpkinAppear() {
        var $divH = document.createElement("div");
        document.body.appendChild($divH);
        
        $divH.classList.add(halloweenPumpkinSpot[Math.floor(Math.random() * halloweenPumpkinSpot.length)]);
        $divH.style.left = `${randomTime(gameBoard.getBoundingClientRect().left, gameBoard.getBoundingClientRect().width)}px`;
        $divH.style.top = `${randomTime(gameBoard.getBoundingClientRect().top, gameBoard.getBoundingClientRect().height)}px`;

        setTimeout(function(){
            $divH.remove();
        }, randomTime(1000, 2000)
        );

        $divH.addEventListener("click", function () {
            mainAudio.pause();
            wrongClickAudio.play();
            clearInterval(halloweenPumpkin);
            clearInterval(pumpkin);
            document.getElementById("myPopup").classList.toggle("show");
        });

    }, halloweenPumpkinFrequency);
});