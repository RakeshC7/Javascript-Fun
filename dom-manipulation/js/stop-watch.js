// Stop Watch JS

const playPauseBtn = document.getElementById('play-pause-btn');
const resetBtn = document.getElementById('reset-btn');

// variables

let seconds = 0,
    minutes = 0,
    hours = 0;

// variable for setInterval and Timer
let timeInterval = null,
    timerStatus = "stopped";


// Stop Watch Function
function stopWatch() {

    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    
    seconds < 10 ? leadingSeconds = '0' + seconds.toString() : leadingSeconds = seconds;
    minutes < 10 ? leadingMinutes = '0' + minutes.toString() : leadingMinutes = minutes;
    hours < 10   ? leadingHours = '0' + hours.toString() : leadingHours = hours;

    console.log([leadingHours, leadingMinutes, leadingSeconds]);

    let displayTimer = document.getElementById('stop-watch-timer').innerText = `${leadingHours} : ${leadingMinutes} : ${leadingSeconds}`;
}


playPauseBtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch, 1000);
        this.innerHTML = '<i class="fas fa-pause"></i>';
        timerStatus = "started";
    } else {
        window.clearInterval(timeInterval);
        this.innerHTML = '<i class="fas fa-play"></i>';
        timerStatus = 'stopped';
    }
});

resetBtn.addEventListener('click', function () {

    window.clearInterval(timeInterval);

    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';

    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("stop-watch-timer").innerText = '00 : 00 : 00';
    console.log("Reset Sucessfully !! ");
})