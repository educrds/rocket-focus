const restartButton = document.querySelectorAll('.btn')[0];
const startButton = document.querySelectorAll('.btn')[1];

const minuteLabel = document.getElementById('min');
const secondLabel = document.getElementById('sec');

const planet = document.querySelector('.planet');

let timer;

// Restart Button Event
restartButton.addEventListener('click', restart);

function restart() {
  clearInterval(timer);
  planet.style.animation = 'none';

  minute = '00';
  second = '00';

  minuteLabel.textContent = '00';
  secondLabel.textContent = '00';
}

// Start Button Event
startButton.addEventListener('click', start);

function start() {
  let totalSeconds = minuteLabel.textContent * 60;

  planet.style.animation = `orbit linear ${totalSeconds}s`;

  timer = setInterval(() => {
    if (totalSeconds === 0) {
      return restart();
    }
    --totalSeconds;
    secondLabel.innerHTML = totalSeconds % 60;
    minuteLabel.innerHTML = parseInt(totalSeconds / 60);
  }, 1000);
}
