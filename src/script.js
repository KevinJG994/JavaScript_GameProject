let modal = document.getElementById("introModal");
let modalBtn = document.getElementById("modalButton");
let span = document.getElementsByClassName("closeModal")[0];

const introPanel = document.getElementsByClassName("introGame-panel")[0];
const gamePanel = document.getElementsByClassName("game-panel")[0];
const gameOverPanel = document.getElementsByClassName("gameOver-panel")[0];

const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
let time = document.getElementById("time");

let scoreLabel = document.getElementById("score");
let finalScore = document.getElementById("finalScore");
let celda = document.getElementsByClassName("row");


//Mostrar modal
modalBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


//Funcionalidad de banda sonora
let introSound;
let gameSound;

function playSoundTrack() {
  introSound = new Audio('./Music/main_theme.mp3')
  introSound.volume = 0.05
  introSound.play();
}

function stopSoundTack() {
  introSound.pause();
}

function playGameTrack() {
  gameSound = new Audio('./Music/game_theme.mp3')
  gameSound.volume = 0.04;
  gameSound.play();
}

function stopGameTrack() {
  gameSound.pause()
}

playSoundTrack()


// Mostrar las vistas
function viewIntro() {
  window.location.reload();
}

function viewGame() {
  introPanel.style.display = "none";
  gamePanel.style.display = "flex";
  playGameTrack()
  stopSoundTack()
}

function viewGameOver() {
  gamePanel.style.display = "none";
  gameOverPanel.style.display = "flex";
  stopGameTrack()
  playSoundTrack()
}


// Navegacion entre paneles
startButton.onclick = () => {
  viewGame();
  startGame();
};

resetButton.onclick = () => {
  viewIntro();
};


// Iniciar Juego
function startGame() {
  let counter = 30;
  let score = 0;

  // Iniciar el contador
  const intervalId = setInterval(function () {
    if (counter > 0) {
      time.innerText = `Tiempo: ${counter}`;
    } else {
      viewGameOver();
      clearInterval(intervalId);
      clearInterval(gameInterval);
    }

    if (counter < 10 && counter > 0) {
      time.style.color = "red";
    } else {
      time.style.color = "white";
    }

    counter--;
  }, 1000);


  //   Aparecen Diglett's random
  const gameInterval = setInterval(() => {
    // Determinamos cuántos Diglett queremos que aparezcan en cada intervalo
    let diglettCount;

    if (score >= 100) {
      diglettCount = Math.floor(Math.random() * 3) + 1;
    } else {
      diglettCount = 1;
    }

    // Creamos un arreglo para llevar el control de las celdas ocupadas
    const occupiedCells = [];

    for (let i = 0; i < diglettCount; i++) {
      let randomNumber;

      // Buscamos una casilla no ocupada
      do {
        randomNumber = Math.floor(Math.random() * celda.length);
      } while (occupiedCells.includes(randomNumber));
      // Marcamos la casilla como ocupada
      occupiedCells.push(randomNumber);

      const randomDiglett = Math.floor(Math.random() * 10);

      let diglett;

      switch (true) {
        case (randomDiglett < 6):
          diglett = new Diglett("./Images/Diglett.png", "150px");

          diglett.onClick(() => {
            const diglettAudio = new Audio('./Music/diglett_sound.mp3');
            diglettAudio.play();

            score += 10;
            scoreLabel.innerText = `Puntuación: ${score}`;
            finalScore.innerText = `Puntuación Final: ${score}`;
            diglett.remove();
          });
          break;

        case (randomDiglett < 8):
          diglett = new Diglett("./Images/Diglett-Alola.png", "200px");

          diglett.onClick(() => {
            const alolanAudio = new Audio('./Music/alolan_sound.mp3');
            alolanAudio.play();

            counter -= 6;
            time.innerText = `Tiempo: ${counter}`;
            diglett.remove();
          });
          break;

        case (randomDiglett < 10):
          diglett = new Diglett("./Images/Wiglett.png", "150px");

          diglett.onClick(() => {
            const wiglettAudio = new Audio('./Music/wiglett_sound.mp3');
            wiglettAudio.play();

            counter += 6;
            time.innerText = `Tiempo: ${counter}`;
            diglett.remove();
          });
          break;
      }

      diglett.spawn(celda[randomNumber]);

      setTimeout(() => {
        diglett.remove();
      }, 800);
    }
  }, 2000);

  if (counter <= 0) {
    clearInterval(gameInterval);
    return;
  }
}