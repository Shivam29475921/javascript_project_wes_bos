const inputDifficultyEL = document.getElementById("choose_difficulty");
const inputTimeEl = document.getElementById("choose_time");
const finalEl = document.querySelector(".final-score");
const gameEl = document.querySelector(".game");
const headingEl = document.querySelector(".heading") ;
window.addEventListener("keydown", (e) =>
{
  if(e.key == "Enter")
    startGame();
})


const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const lights = document.querySelectorAll('.light');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
    let time; 
 if(inputDifficultyEL.value == 0)
  {
    time = randomTime(1000,1300)
  }
  else if(inputDifficultyEL.value == 1)
  {
    time = randomTime(500, 800)
  }
  else if(inputDifficultyEL.value == 2)
  { 
    time = randomTime(200,500)
  }
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  finalEl.innerHTML = ``
  timeUp = false;
  score = 0;
  peep();
  let totalTime = parseInt(inputTimeEl.value);
  setTimeout(() => 
  {
    timeUp = true;
    scoreBoard.textContent = "0";
    finalEl.innerHTML = `
    <p>
      Your final score is : ${score}
    </p>`
  }, totalTime*1000)

  inputTimeEl.disabled = true;
  inputDifficultyEL.disabled = true;

  setTimeout(() => 
  {
    inputTimeEl.disabled = false;
    inputDifficultyEL.disabled = false;
  }, totalTime*1000)
}

function bonk(e) {
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

lights.forEach(light => light.addEventListener('click', bonk));


setInterval(() =>
{
  headingEl.classList.add("lightsOn");
}, 200)
