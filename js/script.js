const btnElem = document.querySelector(".btn");
const imgElem = document.querySelector("img");
const bodyElem = document.querySelector("body");

let isAccesa = false;
btnElem.addEventListener("click", function () {
    /** 
    const isAccesa = imgElem.src.includes("yellow_lamp.png");
    if (isAccesa === true) {
        btnElem.classList.remove(imgElem.src = "./img/white_lamp.png");
        btnElem.innerText = "Accendi";
    } else {
        btnElem.classList.add(imgElem.src = "./img/yellow_lamp.png");
        btnElem.innerText = "Spegni";
    }
        */
    if (isAccesa === true) {
        imgElem.src = "./img/white_lamp.png";
        btnElem.innerText = "Accendi";
        bodyElem.style.backgroundImage = "none";
        isAccesa = false;
    } else {
        imgElem.src = "./img/yellow_lamp.png";
        bodyElem.style.backgroundImage = 'url("./img/night.jpg")';
        btnElem.innerText = "Spegni";
        isAccesa = true;

    }

})