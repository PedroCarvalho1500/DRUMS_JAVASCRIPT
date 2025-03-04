import {cleanUpScreen,loadPage,keysButtonsDict,buttonAnimation} from '../scripts/index.js'

describe('Drum Kit pieces validation', () => {
    beforeAll(async() => {
        await loadPage();
        var previousClick = null
        var numberOfDrumsButtons = document.querySelectorAll(".drum").length;
        console.log(numberOfDrumsButtons);
        for (var i = 0; i < numberOfDrumsButtons; i++) {
            document.querySelectorAll(`.drum`)[i].addEventListener('click', function () {
                const buttonText = this.innerText;
                console.log("CLICKED...")
                buttonAnimation(buttonText);
                switch (buttonText) {
                    case 'w':
                        var audio = new Audio('sounds/tom-1.mp3');
                        //audio.play();
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

        try{
            await document.querySelectorAll(`button`)[0].click();
        }catch(error){
            console.log(error)
        }


    })
    
    it('Click on the first drum piece', async() => {
        
        expect(document.querySelectorAll(`button`)[0].style.color).toEqual(`white`);
    })

    // afterAll(() => {
    //     cleanUpScreen();
    // })
})