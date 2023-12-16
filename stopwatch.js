let display = document.getElementById('display')
let buttons = document.getElementsByTagName('button')

let seconds = 0
let minute = 0
let hour = 0

let globalId = ''

buttons[0].addEventListener('click', () => {
    let timer = setInterval(() => {
        let outputSecond = seconds > 9 ? seconds : `0` + seconds
        let outputMinute = minute > 9 ? minute : `0${minute}`
        let outputHour = hour > 9 ? hour : `0${hour}`

        seconds++
        if(seconds === 60){
            minute ++
            seconds = 0
        }

        if(minute === 60){
            hour ++
            minute = 0
        }
        display.textContent = `${outputHour}:${outputMinute}:${outputSecond}`
    }, 100)
    globalId = timer

})

buttons[1].addEventListener('click', () => {
    clearInterval(globalId)
})

buttons[2].addEventListener('click', () => {
    clearInterval(globalId)
    display.textContent = `00:00:00`;
    seconds = 0;
    minute = 0;
    hour = 0;
})

let display2 = document.getElementById("display2");
buttons[3].addEventListener('click', () => {

    let elementDisplay = document.createElement('h1')
    clearInterval(globalId)
    elementDisplay.innerHTML = display.textContent
    display2.appendChild(elementDisplay)

})