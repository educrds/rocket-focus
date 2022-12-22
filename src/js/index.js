const restartButton = document.querySelectorAll('.btn')[0];
const startButton = document.querySelectorAll('.btn')[1];

const minuteLabel = document.getElementById('min');
const secondLabel = document.getElementById('sec');

const planet = document.querySelector('.planet');
const planetsBtn = document.querySelectorAll('.planets');
const planetImage = document.getElementById('planet-image');
const progressBar = document.querySelector('.progress-bar');

let timer;

// Restart Button Event
restartButton.addEventListener('click', restart);

planetsBtn.forEach((btn) =>
  btn.addEventListener('click', () => {
    planetImage.src = `../assets/${btn.id}.png`;
    document.documentElement.className = btn.id;
    // document.documentElement.classList.toggle(btn.id);
  })
);

function restart() {
  clearInterval(timer);
  minute = '00';
  second = '00';

  planet.style.animation = 'none';
  progressBar.style.width = '0%';
  minuteLabel.textContent = '00';
  secondLabel.textContent = '00';
}

// Start Button Event
startButton.addEventListener('click', start);

function start() {
  const totalSeconds = minuteLabel.textContent * 60;
  let seconds = minuteLabel.textContent * 60;

  planet.style.animation = `orbit linear ${totalSeconds}s`;

  timer = setInterval(() => {
    if (seconds === 0) {
      return restart();
    }
    --seconds;

    secondLabel.textContent = pad(seconds % 60);
    minuteLabel.textContent = pad(parseInt(seconds / 60));

    let secondsPercentage = (seconds * 100) / totalSeconds;
    progressBar.style.width = `${secondsPercentage}%`;
  }, 1000);
}

function pad(val) {
  var valString = val + '';
  if (valString.length < 2) {
    return '0' + valString;
  } else {
    return valString;
  }
}
