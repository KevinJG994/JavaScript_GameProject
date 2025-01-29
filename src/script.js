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


function soundTrack() {
  const audioGame = new Audio('../Music/main_theme.mp3')
  audioGame.volume = 0.1;
  audioGame.play()
}

function gameTrack() {
  const audioGame = new Audio('../Music/game_theme.mp3')
  audioGame.volume = 0.05;
  audioGame.play()
}


// Navegacion entre paneles
if(gamePanel.style.display = "none") {
  soundTrack()
} else {
  gameTrack()
}

startButton.onclick = () => {
  introPanel.style.display = "none";
  gamePanel.style.display = "flex";
  playGame();
};

resetButton.onclick = () => {
  window.location.reload();
};


// Iniciar Juego
function playGame() {
  let counter = 30;
  let score = 0;

  // Iniciar el contador
  const intervalId = setInterval(function () {
    if (counter > 0) {
      time.innerText = `Tiempo: ${counter}`;
    } else {
      gamePanel.style.display = "none";
      gameOverPanel.style.display = "flex";
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

    const randomNumber = Math.floor(Math.random() * celda.length);
    const randomDiglett = Math.floor(Math.random() * 3);
    let diglett;

    switch (randomDiglett) {
      case 0:
        diglett = new Diglett("../Images/Diglett.png", "150px");

        diglett.onClick(() => {
          const diglettAudio = new Audio('../Music/diglett_sound.mp3');
          diglettAudio.play();

          score += 10;
          scoreLabel.innerText = `Puntuación: ${score}`;
          finalScore.innerText = `Puntuación Final: ${score}`;
          diglett.remove();
        });
        break;

      case 1:
        diglett = new Diglett("../Images/Diglett-Alola.png", "200px");

        diglett.onClick(() => {
          const alolanAudio = new Audio('../Music/alolan_sound.mp3');
          alolanAudio.play();

          counter -= 6;
          time.innerText = `Tiempo: ${counter}`;
          diglett.remove();
        });
        break;

      case 2:
        diglett = new Diglett("../Images/Wiglett.png", "150px");

        diglett.onClick(() => {
          const wiglettAudio = new Audio('../Music/wiglett_sound.mp3');
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
    }, 1000);
  }, 2000);

  if (counter <= 0) {
    clearInterval(gameInterval);
    return;
  }
}

