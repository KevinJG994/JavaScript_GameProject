let modal = document.getElementById("introModal");

let btn = document.getElementById("modalButton");

let span = document.getElementsByClassName("closeModal")[0];

btn.onclick = function () {
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

startButton.onclick = () => {
    introPanel.style.display = 'none';
    gamePanel.style.display = 'flex';

    if (gamePanel.style.display = 'flex') {
        setTimeout(function () {
            gamePanel.style.display = 'none';
            gameOverPanel.style.display = 'flex';
        }, 5000);
    }
};

resetButton.onclick = () => {
    window.location.reload();
};



// let celda = document.getElementsByClassName('row')
// let img = document.createElement("IMG")
// img.setAttribute('src', '../Images/Diglett.png')
// img.setAttribute('width', '200px')


// if (celda.length > 0) {
//     celda[4].appendChild(img);
// }

