const readParagraph = document.querySelector('.js-time');
const readPlayButton = document.querySelector('.js-play-button');
const readResetButton = document.querySelector('.js-reset-button');

let sec = 0;
let min = 0;
let hour = 0;

let date = new Date();

function showHour(newDate) {
    return newDate.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

let timer;
let pause = true;

readPlayButton.addEventListener('click', () => {
    if (pause) {
        readPlayButton.innerText = 'Play';
        console.log('Started!');
        playTimer();
        pause = false;
    } else {
        readPlayButton.innerText = 'Pause'
        console.log('Paused!')
        pauseTimer();
    }
});

function playTimer() {
    timer = setInterval(() => {
        sec++;
        date.setHours(hour, min, sec);
        console.log(showHour(date));
        readParagraph.innerHTML = showHour(date);
    }, 1000);
}

function pauseTimer() {
    clearTimeout(timer);
    pause = true;
}

readResetButton.addEventListener('click', () => {
    clearTimeout(timer);
    sec = 0;
    pause = true;
    date.setHours(0, 0, 0);
    console.log('Reset!')
    console.log(showHour(date));
    readParagraph.innerHTML = showHour(date);
});