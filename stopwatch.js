const readParagraph = document.querySelector('.js-time');
const readPlayButton = document.querySelector('.js-play-button');
const readResetButton = document.querySelector('.js-reset-button');

const hours = JSON.parse(localStorage.getItem("hours")) || {
    hour: 0,
    min: 0,
    sec: 0
};

console.log(hours)

let date = new Date();

date.setHours(hours.hour, hours.min, hours.sec);
readParagraph.innerHTML = showHour(date);

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

readResetButton.addEventListener('click', () => {
    resetTimer();
});

function playTimer() {
    timer = setInterval(() => {
        hours.sec++;
        date.setHours(hours.hour, hours.min, hours.sec);
        console.log(showHour(date));
        readParagraph.innerHTML = showHour(date);
        saveToStorage()
    }, 1000);
}

function pauseTimer() {
    clearTimeout(timer);
    pause = true;
}

function resetTimer() {
    clearTimeout(timer);
    hours.sec = 0;
    hours.min = 0;
    hours.hour = 0;
    pause = true;
    date.setHours(0, 0, 0);
    console.log('Reset!');
    readParagraph.innerHTML = showHour(date);
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem("hours", JSON.stringify(hours));
}