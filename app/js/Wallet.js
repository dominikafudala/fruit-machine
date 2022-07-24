class Wallet {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    }


    get amount() {
        return this.#amount;
    }

    changeAmount(bet, isWinner){
        if(isWinner) return this.#amount+= (3 * bet);
        return this.#amount -= bet;
    }

    checkCanPlay(bet){
        return bet <= this.#amount;
    }

}