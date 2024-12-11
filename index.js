// 1
// let totalTime = 60;
// const timer = document.querySelector("#timer");

// const timerInterval = setInterval(() => {
//   totalTime--;

//   if (totalTime <= 0) {
//     clearInterval(timerInterval);
//     alert("Кінець");
//     return;
//   }
//   timer.textContent = `${totalTime}:00`;

//   if (totalTime === 30) {
//     alert("Залишилось 30 хв");
//   }
// }, 60000);
// 2
const time = document.querySelector("#time");
const resetButton = document.querySelector("#restartButton");
let timeLeft = 30;
const timer = setInterval(() => {
  timeLeft--;
  time.textContent = timeLeft;
  if (timeLeft === 10) {
    time.classList.add("animate");
  }
  if (timeLeft === 0) {
    clearInterval(timer);
    resetButton.disabled = false;
    alert("Кінчився.Кнопка перезапуску працює");
    return;
  }
}, 1000);
resetButton.addEventListener("click", () => {
  timeLeft = 30;
  time.textContent = timeLeft;
  resetButton.disabled = true;
  time.classList.remove("animate");
  setInterval(() => {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft === 10) {
      time.classList.add("animate");
    }
    if (timeLeft === 0) {
      clearInterval(timer);
      resetButton.disabled = false;
      alert("Кінчився.Кнопка перезапуску працює");
      return;
    }
  }, 1000);
});
