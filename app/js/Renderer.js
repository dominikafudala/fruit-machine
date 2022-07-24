class Renderer {
    #gameAmount;

    constructor(){
        this.#gameAmount = document.querySelector('.game__amount');
    }

    renderWallet(amount){
        this.#gameAmount.textContent = `You own ${amount}$`;
    }
}