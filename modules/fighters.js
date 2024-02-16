export default class Fighters {
  #name;
  #hp;
  constructor(name, hp = 100) {
    this.#name = name;
    // this.#style = style;
    this.#hp = hp;
  }
  // present() {
  //   const presentH1 = document.createElement("h1");
  //   presentH1.innerText = `My name is ${this.#name} and I am a ${
  //     this.#style
  //   } fighter`;
  //   document.body.append(presentH1);
  // }
  getHitByOpponent(action) {
    const getHit = action;
    this.#hp -= getHit;

    console.log(this.#hp, getHit);
  }
  getHp() {
    return this.#hp;
  }
  getName() {
    return this.#name;
  }
}
