const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;


const trafficLght = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    console.log('indo');
}

const changeColor = () => {
    const colors = ['red','yellow','green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval( intervalId );
}

const turnOn = {
    'red'       : () => img.src = 'assets/imagens/vermelho.png',
    'yellow'    : () => img.src = 'assets/imagens/amarelo.png',
    'green'     : () => img.src = 'assets/imagens/verde.png',
    'automatic' : () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLght );