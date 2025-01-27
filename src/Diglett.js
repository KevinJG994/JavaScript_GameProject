class Diglett {
    constructor(image, width) {
        this.img = document.createElement("IMG");
        this.img.setAttribute('src', image);
        this.img.setAttribute('width', width);
        this.img.style.cursor = 'pointer';
    }

    appendTo(parent) {
        parent.appendChild(this.img);
    }

    onClick() {
        this.img.onclick = () => {
            let score = document.getElementById('score');
            let finalScore = document.getElementById('finalScore');
            let cont = 0;

            cont++
            score.innerText = `Puntuación: ${cont}`
            finalScore.innerText = `Puntuación Final: ${cont}`
        }
    }
}