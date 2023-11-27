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
        readPlayButton.innerText = 'Pause'
        readPlayButton.
        createSec();
        pause = false;
    } else {
        readPlayButton.innerText = 'Play'
        clearInterval(timer);
        pause = true;
    }
});

readResetButton.addEventListener('click', () => {
    pause = true;
});

// readResetButton.addEventListener('click', () => {
//     resetTimer();
// });

// function playTimer() {
//     timer = setInterval(() => {
//         hours.sec++;
//         date.setHours(hours.hour, hours.min, hours.sec);
//         console.log(showHour(date));
//         readParagraph.innerHTML = showHour(date);
//         saveToStorage()
//     }, 1000);
// }

// function pauseTimer() {
//     clearTimeout(timer);
//     pause = true;
// }

// function resetTimer() {
//     clearTimeout(timer);
//     hours.sec = 0;
//     hours.min = 0;
//     hours.hour = 0;
//     pause = true;
//     date.setHours(0, 0, 0);
//     console.log('Reset!');
//     readParagraph.innerHTML = showHour(date);
//     saveToStorage()
// }

// function saveToStorage() {
//     localStorage.setItem("hours", JSON.stringify(hours));
// }