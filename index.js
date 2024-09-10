const gameField = document.querySelector('.desk__field');
const btns = document.querySelectorAll('.menu__btn');

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
        gameField.appendChild(div)
        div.style.width = `${divSize}px`
        div.style.height = `${divSize}px`
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black"
        })
    } 

    gameField.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gameField.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

// createGameField(16)