// const timer = document.getElementById('timer');
// const startButton = document.getElementById('start');
// const stopButton = document.getElementById('stop');
// const resetButton = document.getElementById('reset');
// const lapButton = document.getElementById('lap');
// const lapsList = document.getElementById("laps");


// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;
// let isRunning = false;


// function startTimer() {
//   startTime = Date.now() - elapsedTime;

//   timerInterval = setInterval(() => {
//     elapsedTime = Date.now() - startTime;
//     timer.textContent = formatTimer(elapsedTime);
//   }, 10);

//   startButton.disabled = true;
//   stopButton.disabled = false;
// }

// function stopTimer() {
//   clearInterval(timerInterval);
//   startButton.disabled = false;
//   stopButton.disabled = true;
// }

// function resetTimer() {
//   clearInterval(timerInterval);

//   elapsedTime = 0;
//   timer.textContent = "00:00:00";

//   startButton.disabled = false;
//   stopButton.disabled = false;
//   isRunning = false;
//   lapsList.innerHTML = "";
// }

// function lap() {
//   if (isRunning) {
//     const lapTime = formatTimer(elapsedTime);
//     const lapItem = document.createElement("li");
//     lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
//     lapsList.prepend(lapItem);
//   }
// }

// function formatTimer(elapsedTime) {
//   const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//   const mseconds = Math.floor((elapsedTime % 1000) / 10);
//   return (
//     (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
//     ":" +
//     (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
//     ":" +
//     (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
//     "." +
//     (mseconds > 9 ? mseconds : "0" + mseconds)
//   );
// }

// function updateDisplay() {
//   display.textContent = formatTime(elapsedTime);
// }

// startButton.addEventListener("click", startTimer);
// stopButton.addEventListener("click", stopTimer);
// lapButton.addEventListener("click", lap);
// resetButton.addEventListener("click", resetTimer);

const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsList = document.getElementById("laps");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// Format elapsed time into hh:mm:ss.ms
function formatTimer(elapsedTime) {
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const mseconds = Math.floor((elapsedTime % 1000) / 10);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${mseconds
    .toString()
    .padStart(2, "0")}`;
}

// Start timer function
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timer.textContent = formatTimer(elapsedTime);
    }, 10);

    startButton.disabled = true;
    stopButton.disabled = false;
  }
}

// Stop timer function
function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);

    startButton.disabled = false;
    stopButton.disabled = true;
  }
}

// Reset timer function
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  isRunning = false;

  timer.textContent = "00:00:00.00";
  lapsList.innerHTML = "";

  startButton.disabled = false;
  stopButton.disabled = true;
}

// Add lap function
function lap() {
  if (isRunning) {
    const lapTime = formatTimer(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
    lapsList.prepend(lapItem);
  }
}

// Event listeners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", lap);
