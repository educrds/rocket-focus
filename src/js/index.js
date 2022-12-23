const restartButton = document.querySelectorAll('.btn')[0];
const startButton = document.querySelectorAll('.btn')[1];

const minuteLabel = document.getElementById('min');
const secondLabel = document.getElementById('sec');

const alert = new Audio('../../assets/sound/beep-beep.mp3');

const modalBtn = document.querySelector('.main');
const modalContent = document.querySelector('.content');

const planet = document.querySelector('.planet');
const planetsBtn = document.querySelectorAll('.planets');
const planetImage = document.getElementById('planet-image');

const themeBtn = document.querySelector('.theme');

const progressBar = document.querySelector('.progress-bar');

let timer;

// Restart Button Event
restartButton.addEventListener('click', restart);
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  themeIcon.src = './assets/imgs/sun.png';
});

modalBtn.addEventListener('mouseover', () => (modalContent.style.display = 'block'));

modalContent.addEventListener(
  'mouseleave',
  () => (modalContent.style.display = 'none')
);

planetsBtn.forEach((btn) =>
  btn.addEventListener('click', () => {
    const buttonID = btn.id;
    planetImage.src = `../assets/imgs/${buttonID}.png`;

    switch (buttonID) {
      case 'mars':
        document.documentElement.style.setProperty('--main-color', '#de7432');
        break;

      case 'jupyter':
        document.documentElement.style.setProperty('--main-color', '#5f27e6');
        break;

      case 'earth':
        document.documentElement.style.setProperty('--main-color', '#333fef');
        break;

      case 'moon':
        document.documentElement.style.setProperty('--main-color', '#616161');
        break;

      default:
        break;
    }
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
      alert.play();
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
