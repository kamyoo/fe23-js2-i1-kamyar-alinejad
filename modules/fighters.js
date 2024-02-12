export default class Fighters {
  #name;
  #style;
  hp = 100;
  constructor(name, style, hp) {
    this.#name = name;
    this.#style = style;
    this.hp = hp;
  }
  present() {
    console.log(`My name is ${this.#name} and I am a ${this.#style} fighter`);
  }
  hitOpponent(typeOfAction) {
    const hit = typeOfAction;
  }
  getHitByOpponent(action) {
    const getHit = action;
  }
}
