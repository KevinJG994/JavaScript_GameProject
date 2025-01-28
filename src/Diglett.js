class Diglett {
    constructor(imageSrc, size) {
        this.imageSrc = imageSrc;
        this.size = size;
        this.element = document.createElement('img');
        this.init();
    }

    init() {
        this.element.setAttribute('src', this.imageSrc);
        this.element.setAttribute('width', this.size);
        this.element.style.cursor = 'pointer';
    }

    spawn(container) {
        if (container) {
            container.appendChild(this.element);
        }
    }

    onClick(callback) {
        this.element.onclick = callback;
    }

    remove() {
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
}