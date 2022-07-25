class Game{
    #wallet;
    #statistics;
    #fruitRandomizer;
    #renderer;

    constructor() {
       this.#fruitRandomizer =  new FruitRandomizer('strawberry', 'lemon', 'pear');
       this.#wallet = new Wallet(150);
       this.#statistics = new Statistics();
       this.#renderer = new Renderer();

       this.#firstRender();
    }

    #firstRender() {
        this.#renderer.renderWallet(this.#wallet.amount);
    }

    startGame(){
        const bet = parseInt(document.querySelector('.game__input').value);

        if (bet <= 0 || !Number.isInteger(bet)) {
            alert('Input integer greater than 0');
            return;
        }

        if(!this.#wallet.checkCanPlay(bet)){
            alert('You don\'t have enough money');
            return;
        }

        const randomizedFruits = this.#fruitRandomizer.randomizeFruits();
        const fruitrandomChoice = this.#fruitRandomizer.randomizeFruits();
        const result = Result.checkResult(randomizedFruits);
        const resultMsg = this.#wallet.changeAmount(bet, result);

        this.#statistics.changeStatistics(result);

        this.#renderer.renderDOM(
            this.#statistics.statistics,
             resultMsg,
              this.#wallet.amount,
              randomizedFruits,
              fruitrandomChoice,
              this.#fruitRandomizer.choice
              );

    }
}