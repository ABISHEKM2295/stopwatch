

let interval;
let i = 0;

function formatTime(val) {
  return val < 10 ? "0" + val : val;
}

function updateDisplay() {
  let hour = Math.floor(i / 3600);
  let minutes = Math.floor((i % 3600) / 60);
  let seconds = i % 60;

  let displayTime = `${formatTime(hour)}:${formatTime(minutes)}:${formatTime(
    seconds
  )}`;

  document.getElementById("load").innerHTML = displayTime;
}

function start() {
  if (interval) return; // Prevent multiple intervals

  interval = setInterval(() => {
    i++;
    updateDisplay();
  }, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stop(); // Stop the timer
  i = 0; // Reset counter
  updateDisplay();
}
