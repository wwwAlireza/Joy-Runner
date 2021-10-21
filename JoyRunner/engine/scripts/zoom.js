"use strict";
let isZoomed = false;

game.container.addEventListener("dblclick", startZooming)

function startZooming() {
    if (!isZoomed) {
        if (windowWidth >= 950 && windowWidth <= 1100) {
            game.container.style.transform = "scale(1.1)";
        } else if (windowWidth >= 1100 && windowWidth <= 1300) {
            game.container.style.transform = "scale(1.3)";
            game.container.style.marginTop = "100px";
            statusText.container.style.top = "70px";
        } else if (windowWidth >= 1300) {
            game.container.style.transform = "scale(1.5)";
            game.container.style.marginTop = "100px";
            statusText.container.style.top = "80px";
        };
        isZoomed = true;
    } else {
        game.container.style.transform = "scale(1)";
        game.container.style.marginTop = "20px";
        statusText.container.style.top = "0";
        isZoomed = false;
    }
}



// window width
let windowWidth;

function getWindowWidth() {
    windowWidth = window.innerWidth || document.body.innerWidth || document.documentElement.innerWidth;
}
getWindowWidth();
window.addEventListener("resize", getWindowWidth);