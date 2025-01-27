let modal = document.getElementById("introModal");

let modalBtn = document.getElementById("modalButton");

let span = document.getElementsByClassName("closeModal")[0];

modalBtn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Navegacion entre paneles
const introPanel = document.getElementsByClassName('introGame-panel')[0]
const gamePanel = document.getElementsByClassName('game-panel')[0]
const gameOverPanel = document.getElementsByClassName('gameOver-panel')[0]

const startButton = document.getElementById('startButton')
const resetButton = document.getElementById('resetButton')
let time = document.getElementById('time')

startButton.onclick = () => {
    introPanel.style.display = 'none';
    gamePanel.style.display = 'flex';
    playGame();
}

resetButton.onclick = () => {
    window.location.reload();
};

function playGame() {
// Inicia el contador al empezar el juego
    let counter = 30;
    if (gamePanel.style.display = 'flex') {
        const intervalId = setInterval(function () {
            if (counter > 0) {
                time.innerText = `Tiempo: ${counter}`
            } else {
                gamePanel.style.display = 'none';
                gameOverPanel.style.display = 'flex';
                clearInterval(intervalId);
            }

            if (counter < 10 && counter > 0) {
                time.style.color = 'red'
                time.innerText = `Tiempo: ${counter}`
            }

            counter--;
        }, 1000);
    }

// Agrega el primer topo a los 3 segundos de empezar el jeugo
    const timeoutId = setTimeout(function () {
        let celda = document.getElementsByClassName('row');
        let img = document.createElement("IMG");
        img.setAttribute('src', '../Images/Diglett.png');
        img.setAttribute('width', '150px');

        let num = Math.floor(Math.random() * celda.length);

        if (celda.length > 0) {
            celda[num].appendChild(img);
        }
    }, 2000);
};
