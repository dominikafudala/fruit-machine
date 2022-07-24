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
        console.log("game started");
    }
}