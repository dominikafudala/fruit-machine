const game = new Game();

const button =  document.querySelector('.game__start');

button.addEventListener('click', (e)=> {
    e.preventDefault();
    game.startGame();
})