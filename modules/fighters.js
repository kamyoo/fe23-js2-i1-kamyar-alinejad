export default class Fighters {
  #name;
  #style;
  #hp;
  constructor(name, style, hp = 100) {
    this.#name = name;
    this.#style = style;
    this.#hp = hp;
  }
  present() {
    const presentH1 = document.createElement("h1");
    presentH1.innerText = `My name is ${this.#name} and I am a ${
      this.#style
    } fighter`;
    document.body.append(presentH1);
  }
  // hitOpponent(typeOfAction) {
  //   const hit = typeOfAction;
  //   console.log(typeOfAction);
  // }
  getHitByOpponent(action) {
    const getHit = action;
    this.#hp -= getHit;
    const hpEl = document.querySelector("#p1Hp");
    hpEl.innerText = "HP: " + this.#hp;

    if (this.#hp <= 0) {
      const h1El = document.querySelector("#p1Text");
      h1El.innerText = "Du dog";
    }

    console.log(this.#hp, getHit);
  }
}
