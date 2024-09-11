var containerdiv = document.querySelector('div');

var increaseBtn = document.querySelector('#increase');
var decreaseBtn = document.querySelector('#decrease');

var fontSize = 16;

increaseBtn.addEventListener('click', () => {
    fontSize += 2;
    containerdiv.style.fontSize = fontSize + 'px';
});

decreaseBtn.addEventListener('click', () => {
    fontSize -= 2; // Decrease font size by 2px
    containerdiv.style.fontSize = fontSize + 'px';
});