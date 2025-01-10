var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

var keysButtonsDict = {
    'w': document.querySelectorAll(`.drum`)[0],
    'a': document.querySelectorAll(`.drum`)[1],
    's': document.querySelectorAll(`.drum`)[2],
    'd': document.querySelectorAll(`.drum`)[3],
    'j': document.querySelectorAll(`.drum`)[4],
    'k': document.querySelectorAll(`.drum`)[5],
    'l': document.querySelectorAll(`.drum`)[6]
}


console.log(numberOfDrumsButtons);
let previousClick = null;
//ARROW FUNCTION DOES NOT AUTOMATICALLY BIND THIS.
for (var i = 0; i < numberOfDrumsButtons; i++) {
    document.querySelectorAll(`.drum`)[i].addEventListener('click', function () {
        const buttonText = this.innerText;
        buttonAnimation(buttonText);
        switch (buttonText) {
            case 'w':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case 'a':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case 's':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case 'd':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case 'j':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case 'k':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

            case 'l':
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            default:
                break;
        }



        if (previousClick !== this && previousClick !== null) {
            previousClick.style.color = `#DA0463`;
            previousClick = this;
        }

        previousClick = this;
        this.style.color = `white`;
    });
}


document.addEventListener('DOMContentLoaded', () => {


    document.addEventListener('keydown', (event) => {
        keysButtonsDict[event.key].click();
    })

});



function buttonAnimation(currentKey){
    var activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add(`pressed`);

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}