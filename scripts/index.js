export var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

export var keysButtonsDict = {
    'w': document.querySelectorAll(`.drum`)[0],
    'a': document.querySelectorAll(`.drum`)[1],
    's': document.querySelectorAll(`.drum`)[2],
    'd': document.querySelectorAll(`.drum`)[3],
    'j': document.querySelectorAll(`.drum`)[4],
    'k': document.querySelectorAll(`.drum`)[5],
    'l': document.querySelectorAll(`.drum`)[6]
} 



console.log(numberOfDrumsButtons);
export let previousClick = null;
//ARROW FUNCTION DOES NOT AUTOMATICALLY BIND THIS.
for (var i = 0; i < numberOfDrumsButtons; i++) {
    document.querySelectorAll(`.drum`)[i].addEventListener('click', function () {
        const buttonText = this.innerText;
        console.log("CLICKED...")
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



function loadPage(){

    const body_html = `

    <div class="set">
        <button class="w drum">w</button>
        <button class="a drum">a</button>
        <button class="s drum">s</button>
        <button class="d drum">d</button>
        <button class="j drum">j</button>
        <button class="k drum">k</button>
        <button class="l drum">l</button>
    </div>

    <div class="none"></div>


    <script src="./scripts/index.js" type="module"></script>

    `;


    document.querySelector(`body`).innerHTML += body_html;
    

}

document.addEventListener('DOMContentLoaded', (event) => {
    const pageTitle = event.target.title;

    if(pageTitle === 'Drum Kit'){
        document.addEventListener('keydown', (event) => {
            keysButtonsDict[event.key].click();
        });
    }else{
        console.log(`JASMINE TEST`);

    
    }

})



function cleanUpScreen(){
    document.querySelector(`html`).innerHTML = ``;
} 


function buttonAnimation(currentKey){
    var activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add(`pressed`);

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}




export {cleanUpScreen,loadPage,buttonAnimation};