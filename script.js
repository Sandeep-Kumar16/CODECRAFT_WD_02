let startTime, updatedTime, difference, tInterval;
let running = false;
let laps = [];

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % 1000));

  document.getElementById('display').innerHTML =
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds) + "." +
    (milliseconds < 100 ? "0" + milliseconds : milliseconds);
}

function start() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(updateTime, 1);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(tInterval);
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  document.getElementById('display').innerHTML = "00:00:00.000";
  document.getElementById('laps').innerHTML = "";
  laps = [];
}

function lap() {
  if (running) {
    laps.push(document.getElementById('display').innerHTML);
    let lapList = document.getElementById('laps');
    let newLap = document.createElement('li');
    newLap.textContent = "Lap " + laps.length + ": " + laps[laps.length - 1];
    lapList.appendChild(newLap);
  }
}
