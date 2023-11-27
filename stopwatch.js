const readParagraph = document.querySelector('.js-time');
const readPlayButton = document.querySelector('.js-play-button');
const readResetButton = document.querySelector('.js-reset-button');

let sec = 0;
let timer;
let pause = true;

function createHours(sec) {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC'
    });
}

function createSec() {
    timer = setInterval(() => {
        sec++;
        readParagraph.innerHTML = createHours(sec);
    }, 1000)
}

readPlayButton.addEventListener('click', () => {
    if(pause) {
        readPlayButton.innerText = 'Pause';
        readParagraph.classList.remove('paused');
        createSec();
        pause = false;
    } else {
        readPlayButton.innerText = 'Play';
        readParagraph.classList.add('paused');
        clearInterval(timer);
        pause = true;
    }
});

readResetButton.addEventListener('click', () => {
    readPlayButton.innerText = 'Play'
    readParagraph.innerHTML = '00:00:00';
    clearInterval(timer);
    pause = true;
    sec = 0;
});