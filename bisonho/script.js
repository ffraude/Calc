const display = document.getElementById('display');
const mason = document.getElementById('mason');
const tuffphonk = new Audio('img/tuffphonk.mp3');
const mason2 = document.getElementById('mason2');

function showNumber(number) {
    display.value += number;
}

function tuff(boolean) {
    let tuff;
    if (boolean == true || tuff == boolean) {
        display.value = '67';
        mason.style.display = 'block';
        mason2.style.display = 'block';
        tuffphonk.play();
        
    } else {
        display.value = '';
        mason.style.display = 'none';
        mason2.style.display = 'none';
        tuffphonk.pause();
        tuffphonk.currentTime = 0;
    }
}

function operators(symbol) {
    display.value += symbol;
}
