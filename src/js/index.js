const restartButton = document.querySelectorAll('.btn')[0];
const startButton = document.querySelectorAll('.btn')[1];

const minuteLabel = document.getElementById('min');
const secondLabel = document.getElementById('sec');

const modalBtn = document.querySelector('.main');
const modalContent = document.querySelector('.content');

const planet = document.querySelector('.planet');
const planetsBtn = document.querySelectorAll('.planets');
const planetImage = document.getElementById('planet-image');
const progressBar = document.querySelector('.progress-bar');

let timer;

// Restart Button Event
restartButton.addEventListener('click', restart);

modalBtn.addEventListener(
  'mouseover', 
() => (modalContent.style.display = 'block'));

modalContent.addEventListener(
  'mouseleave',
  () => (modalContent.style.display = 'none')
);

planetsBtn.forEach((btn) =>
  btn.addEventListener('click', () => {
    planetImage.src = `../assets/${btn.id}.png`;
    document.documentElement.className = btn.id;
  })
);

function restart() {
  clearInterval(timer);
  document.title = 'RocketFocus';
  minute = '00';
  second = '00';

  planet.style.animation = 'none';
  progressBar.style.width = '100%';
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

    document.title = `${pad(parseInt(seconds / 60))}:${pad(
      seconds % 60
    )} - RocketFocus`;

    minuteLabel.textContent = pad(parseInt(seconds / 60));
    secondLabel.textContent = pad(seconds % 60);

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
