const readParagraph = document.querySelector('.js-time');
const readPlayButton = document.querySelector('.js-play-button');

let sec = JSON.parse(localStorage.getItem('sec'));
if (!sec) {
    sec = 0;
}

let timer;
let pause = true;

readParagraph.innerHTML = createHours(sec);

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
        saveToStorage();
    }, 1000);
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('js-play-button')) {
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
    }
    if(el.classList.contains('js-reset-button')) {
        readPlayButton.innerText = 'Play'
        readParagraph.innerHTML = '00:00:00';
        readParagraph.classList.remove('paused');
        clearInterval(timer);
        pause = true;
        sec = 0;
        saveToStorage();
    }
})

function saveToStorage() {
    localStorage.setItem('sec', JSON.stringify(sec));
}