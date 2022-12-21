const restartButton = document.querySelectorAll('.btn')[0];
const startButton = document.querySelectorAll('.btn')[1];

const minuteLabel = document.getElementById('min');
const secondLabel = document.getElementById('sec');
let timer;

// Restart Button Event
restartButton.addEventListener('click', restart);

function restart() {
  clearInterval(timer);
  minute = '00';
  second = '00';

  minuteLabel.textContent = '00';
  secondLabel.textContent = '00';
}

// Start Button Event
startButton.addEventListener('click', start);

function start() {
  var totalSeconds = minuteLabel.textContent * 60;

  if (totalSeconds <= '00') {
    return;
  } else {
  }
  timer = setInterval(() => {
    --totalSeconds;
    secondLabel.innerHTML = totalSeconds % 60;
    minuteLabel.innerHTML = parseInt(totalSeconds / 60);
  }, 1000);
}

// let cron;

// // document.form_main.start.onclick = () => start();
// // document.form_main.pause.onclick = () => pause();
// // document.form_main.reset.onclick = () => reset();

// function start() {
//   pause();
//   cron = setInterval(() => { timer(); }, 10);
// }

// function pause() {
//   clearInterval(cron);
// }

// function timer() {
//   if (second == 60) {
//     second = 0;
//     minute--;
//   }
//   secondLabel.textContent = returnData(second);
//   secondLabel.textContent = returnData(hour);
// }

// function returnData(input) {
//   return input
// }
