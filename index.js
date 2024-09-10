const gameField = document.querySelector('.desk__field');
const btns = document.querySelectorAll('.menu__btn');
const color = document.getElementById('color');
const random = document.querySelector('.random');
console.log(random)

let selectColor = color.value;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        createGameField(btn.value)
    })
})

function createGameField (size) {
    gameField.innerHTML = '';
    const divSize = 500 / size

    for(let i = 0; i < size*size; i++) {
        const div = document.createElement("div");
        div.classList.add('item');
        gameField.appendChild(div);
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.addEventListener("mouseenter", colorMode);
    } 

    gameField.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gameField.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

color.addEventListener('input', (event) => {
    selectColor = event.target.value;
})

function colorMode (event) {
    event.target.style.backgroundColor = selectColor;
}   

function getRandom () {
    let letter = "0123456789ABCDEF";
    let letterColor = "#";
    for (let i = 0; i < 6; i++) {
        letterColor += letter[Math.floor(Math.random() * 16)];
    }

    return letterColor;
}

random.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = getRandom();
        })
    })
})

createGameField(16)