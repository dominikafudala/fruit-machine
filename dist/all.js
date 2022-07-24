class Result{static checkResult(t){return(e=t).every((t=>t===e[0]))||e.length===new Set(e).size;var e}}class Wallet{#t;constructor(t){this.#t=t}get amount(){return this.#t}changeAmount(t,e){return e?this.#t+=3*t:this.#t-=t}checkCanPlay(t){return t<=this.#t}}class Statistics{#e;#r;#s;constructor(){this.#r=0,this.#s=0,this.#e=0}changeStatistics(t){t?this.#e+=1:this.#r+=1,this.#s+=1}get statistics(){return{played:this.#s,won:this.#e,lost:this.#r}}}class FruitRandomizer{#a;constructor(...t){this.#a=t}randomizeFruits(){return[this.#n(),this.#n(),this.#n()]}#n(){return this.#a[Math.floor(Math.random()*this.#a.length)]}}class Renderer{#i;constructor(){this.#i=document.querySelector(".game__amount")}renderWallet(t){this.#i.textContent=`You own ${t}$`}}class Game{#o;#c;#l;#u;constructor(){this.#l=new FruitRandomizer("strawberry","lemon","pear"),this.#o=new Wallet(150),this.#c=new Statistics,this.#u=new Renderer,this.#h()}#h(){this.#u.renderWallet(this.#o.amount)}startGame(){console.log("game started")}}const game=new Game;document.querySelector(".game__start").addEventListener("click",(t=>{t.preventDefault(),game.startGame()}));
//# sourceMappingURL=all.js.map