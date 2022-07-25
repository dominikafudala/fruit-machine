class Renderer {
    #gameAmount;
    #resultMsg;
    #played;
    #won;
    #lost;
    #fruits;

    constructor(){
        this.#gameAmount = document.querySelector('.game__amount');
        this.#resultMsg = document.querySelector('.stats__result p')
        this.#played = document.querySelector('.stats__detail:nth-child(1) .stats__num');
        this.#won = document.querySelector('.stats__detail:nth-child(2) .stats__num');
        this.#lost = document.querySelector('.stats__detail:nth-child(3) .stats__num');
        this.#fruits = document.querySelectorAll('.game__img');
    }

    renderDOM(stats, resultMsg, amount, randomizedFruits, fruitRandomChoice, allChoice){
        this.#renderFruits(randomizedFruits, fruitRandomChoice, allChoice);
        this.renderWallet(amount);
        this.#renderResult(resultMsg);
        this.#renderStatistics(stats);
    }

    renderWallet(amount){
        this.#gameAmount.textContent = `You own ${amount}$`;
    }

    #renderResult(resultMsg){
        this.#resultMsg.textContent = resultMsg;
    }

    #renderStatistics(stats){
        this.#played.textContent = stats.played;
        this.#won.textContent = stats.won;
        this.#lost.textContent = stats.lost;
    }

    #sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async #renderFruits(randomizedFruits, fruitRandomChoice, allChoice){
        const button =  document.querySelector('.game__start');
        button.setAttribute('disabled', '');

        for(let i = 0; i < 5; i++){
            const fruitCurrentIn = document.querySelectorAll('.fruit-in');
            const fruitCurrentTop = document.querySelectorAll('.fruit-top');

            fruitCurrentTop.forEach(elem => {
                    elem.classList.add('fruit-in');
                    elem.classList.remove('fruit-top');

                    allChoice.forEach(c => elem.classList.remove(c));

                    const ind = [...fruitCurrentTop].indexOf(elem);

                    if(i !== 4) {
                        elem.classList.add(fruitRandomChoice[Math.floor(Math.random() * allChoice.length)]);
                    }else{
                        elem.classList.add(randomizedFruits[ind])
                    }

                    allChoice.forEach(c => {
                        if(elem.classList.contains(c)) {
                            allChoice.forEach(ch => elem.parentElement.classList.remove(ch));
                            elem.parentElement.classList.add(c)
                        }
                    })
            })

            fruitCurrentIn.forEach(elem => {
                elem.classList.add('fruit-out');
                elem.classList.remove('fruit-in');

            })

            await this.#sleep(100);

            const fruitCurrentOut = document.querySelectorAll('.fruit-out');

            fruitCurrentOut.forEach(elem => {
                elem.classList.add('fruit-top')
                elem.classList.remove('fruit-out')
            });

            await this.#sleep(15);
        }

        button.removeAttribute('disabled', '');
    }

}