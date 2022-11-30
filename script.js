document.body.addEventListener('keyup', (event)=>{

    playSound( event.code.toLowerCase() );

});

document.querySelector('.composer button').addEventListener('click', ()=> {

    let song = document.querySelector('#input').value;

    // Change song in a array.
    if(song != '') {

        let songArray = song.split('');

        playComposition(songArray);

    }

});

// Function to play the sound.
function playSound(sound) {

    let audioElement = document.querySelector(`#s_${sound}`);

    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    // Confirmar se ele achou o elemento do audio.
    if(audioElement) {

        //Zera o som anterior para não haver tempo de espera.
        audioElement.currentTime = 0;

        audioElement.play();

    }

    // Confirmar se ele achou o elemento da chave. Isso vai mudar a cor da letra. 
    if(keyElement) {

        keyElement.classList.add('active');

        // Adding a function to remove the button effect.
        setTimeout(()=>{

            keyElement.classList.remove('active');

        }, 300);

    }

}

function playComposition(songArray) {

    // This variable will help the sound not to collapse. 
    let wait = 0;

    for (let songItem of songArray) {

        setTimeout(()=>{

            playSound(`key${songItem}`);

        }, wait);

        wait += 250;

    }

}