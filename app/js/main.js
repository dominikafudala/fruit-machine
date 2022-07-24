const game = new Game();

document.querySelector('.game__start').addEventListener('click', (e)=> {
    e.preventDefault();
    game.startGame();
})