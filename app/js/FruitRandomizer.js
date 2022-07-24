class FruitRandomizer {
    #choice;

    constructor(...choice){
        this.#choice = choice;
    }

    randomizeFruits(){
        return [this.#randomizeFruit(), this.#randomizeFruit(), this.#randomizeFruit()]
    }

    #randomizeFruit(){
        return this.#choice[Math.floor(Math.random() * this.#choice.length)];
    }

}