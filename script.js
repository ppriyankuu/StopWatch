
const timedisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startbtn");
const pauseBtn = document.querySelector("#pausebtn");
const resetBtn = document.querySelector("#resetbtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
        // document.getElementById("startbtn").textContent = "Start";
    }
});

pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
        document.getElementById("pausebtn").textContent = "Resume";
    }
    else{
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
        document.getElementById("pausebtn").textContent = "Pause";
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;

    timedisplay.textContent = "00:00:00:00"
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    ms = Math.floor(elapsedTime % 60);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    ms = pad(ms);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timedisplay.textContent = `${hrs}:${mins}:${secs}:${ms}`;


    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}









