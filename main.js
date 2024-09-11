var fontSize = 16;

function increaseFontSize() {
    fontSize = fontSize + 2;
    document.querySelector("div").style.fontSize = fontSize + 'px';
}
function decreaseFontSize() {
    fontSize = fontSize - 2;
    document.querySelector("div").style.fontSize = fontSize + 'px';
}


document.querySelector(".increase").onclick = increaseFontSize;
document.querySelector(".decrease").onclick = decreaseFontSize;