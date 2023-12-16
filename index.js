let display = document.getElementById('display');
let buttons = document.getElementsByTagName('button');

let seconds = 0;
let minute = 0;
let hour = 0;

let timerId;

buttons[0].addEventListener('click', startTimer);
buttons[1].addEventListener('click', stopTimer);
buttons[2].addEventListener('click', resetTimer);
buttons[3].addEventListener('click', saveTimer);

function startTimer() {
    if (!timerId) {
        timerId = setInterval(updateTimer, 100);
    }
}

function stopTimer() {
    clearInterval(timerId);
    timerId = undefined;
}

function resetTimer() {
    stopTimer();
    display.textContent = '00:00:00';
    seconds = 0;
    minute = 0;
    hour = 0;
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        minute++;
        seconds = 0;
    }

    if (minute === 60) {
        hour++;
        minute = 0;
    }

    let outputSecond = seconds > 9 ? seconds : '0' + seconds;
    let outputMinute = minute > 9 ? minute : '0' + minute;
    let outputHour = hour > 9 ? hour : '0' + hour;

    display.textContent = `${outputHour}:${outputMinute}:${outputSecond}`;
}

function saveTimer() {
    if (timerId) {
        stopTimer();
        let elementDisplay = document.createElement('h1');
        elementDisplay.innerHTML = display.textContent;
        document.getElementById('display2').appendChild(elementDisplay);
    }
}
