const readParagraph = document.querySelector('.js-time');
const readPlayButton = document.querySelector('.js-play-button');
const readResetButton = document.querySelector('.js-reset-button');



const time = {
    seconds: 0,
    minutes: 0,
    hours: 0
}

console.log(time.hours, time.minutes, time.seconds)

let allowExecution = false;
let intervalID;

showResults();

readPlayButton.addEventListener('click', () => {
    if (!allowExecution) {
        clearInterval(intervalID);
        allowExecution = true;
        startTimer();
    } else {
        clearInterval(intervalID);
        allowExecution = false;
    }
    allowExecution === false ? console.log('stopped') : console.log('run');

    const pause = readPlayButton.classList.contains('css-pause-button');
    if (!pause) {
        readPlayButton.innerHTML = 'Pause';
        readPlayButton.classList.add('css-pause-button');
    } else {
        readPlayButton.innerHTML = 'Play';
        readPlayButton.classList.remove('css-pause-button');
    }
});

readResetButton.addEventListener('click', () => {
    reset();
});

function startTimer() {
    intervalID = setInterval(() => {
        if (allowExecution === false) { //Check if the timer should stop
            return;
        };

        if (time.seconds >= 59) {
            time.seconds = 0;
            time.minutes++;
            consoleLogResult();
        } else {
            time.seconds++;
            consoleLogResult();
        }


        if (time.minutes > 59) {
            time.minutes = 0;
            time.hours++;
            consoleLogResult();
        }

        if (time.hours >= 24) {
            consoleLogResult();
            clearInterval(intervalID);
            return;
        }

        showResults();
    }, 1000);
}

function showResults() {
    const html = `
    ${time.hours.toString().padStart(2, '0')}:
    ${time.minutes.toString().padStart(2, '0')}:
    ${time.seconds.toString().padStart(2, '0')}
    `
    document.querySelector('.js-time').innerHTML = html;
}

function consoleLogResult() {
    console.log(`${time.hours}, ${time.minutes}, ${time.seconds} ${typeof time.seconds}`);
}

function reset() {
    time.hours = 0;
    time.minutes = 0;
    time.seconds = 0;
    allowExecution = false;
    clearInterval(intervalID);
    console.log('Reset')
    showResults();
    const pause = readPlayButton.classList.contains('css-pause-button');

    if(pause) {
        readPlayButton.innerHTML = 'Play';
        readPlayButton.classList.remove('css-pause-button');
    }
}