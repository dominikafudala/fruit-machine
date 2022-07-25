class Wallet {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    }


    get amount() {
        return this.#amount;
    }

    changeAmount(bet, isWinner){
        if(isWinner) {
            this.#amount+= (3 * bet);
            return `You won ${3 * bet}$`;
        }
        this.#amount -= bet;
        return `You lost ${bet}$`
    }

    checkCanPlay(bet){
        return bet <= this.#amount;
    }

}