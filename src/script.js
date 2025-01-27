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


// let celda = document.getElementsByClassName('row')
// let img = document.createElement("IMG")
// img.setAttribute('src', '../Images/Diglett.png')
// img.setAttribute('width', '200px')


// if (celda.length > 0) {
//     celda[4].appendChild(img);
// }

