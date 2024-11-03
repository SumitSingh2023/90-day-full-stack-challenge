let hour = 0
let minute = 0
let second = 0
let intervalId;
let timmerRunning = false

function updateDisplay() {
    let hourDisplay = String(hour).padStart(2, '0')
    let minuteDisplay = String(minute).padStart(2, '0')
    let secondDisplay = String(second).padStart(2, '0')
    document.getElementById('timer').textContent = `${hourDisplay} : ${minuteDisplay} : ${secondDisplay}`
}

function startTimer() {
    if (!timmerRunning) {
        timmerRunning = true
        intervalId = setInterval(() => {
            second++
            if (second == 60) {
                second = 0
                minute++
            }
            if (minute == 60) {
                minute = 0
                hour++
            }
            updateDisplay()
        }, 1000)

    }
}

function stopTimer() {
    clearInterval(intervalId)
    timmerRunning = false
}

function resetTimer() {
    timmerRunning=false
    hour = 0
    minute = 0
    second = 0
    clearInterval(intervalId)
    updateDisplay()
}