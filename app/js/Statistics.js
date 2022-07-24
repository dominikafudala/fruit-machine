class Statistics{
    #won;
    #lost;
    #played;

    constructor(){
        this.#lost = 0;
        this.#played = 0;
        this.#won = 0;
    }

    changeStatistics(isWinner){
        if(isWinner) this.#won += 1;
        else this.#lost += 1;

        this.#played +=1;
    }

    get statistics() {
        return {
            played: this.#played,
            won: this.#won,
            lost: this.#lost
        }
    }
}