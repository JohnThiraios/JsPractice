// Minutes + Seconds Timer

// let secondsElapsed = 0;
// let interval = null;
// const time = document.getElementById("time");

// function padStart(value) {
//   return String(value).padStart(2, "0");
// }

// function setTime() {
//   const minutes = Math.floor(secondsElapsed / 60);
//   const seconds = secondsElapsed % 60;
//   const miliseconds = Math.floor((secondsElapsed % 1) * 1000);
//   time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
// }
// function timer() {
//   secondsElapsed++;
//   setTime();
// }

// function startClock() {
//   // if (interval) resetClock();
//   // clearInterval(interval);
//   if (interval) stopClock();
//   interval = setInterval(timer, 1000);
// }

// function stopClock() {
//   clearInterval(interval);
//   interval = null;
// }

// function resetClock() {
//   stopClock();
//   secondsElapsed = 0;
//   setTime();
// }

////////////////////////////////////////////////////////////////
// Hours + Minutes + Seconds + Milliseconds Timer

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".time");
let int = null;

document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  time.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
