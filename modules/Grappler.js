import Fighters from "./fighters.js";

export default class Grappler extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;

  constructor(name, hp) {
    super(name, hp);
  }
  grapple() {
    const grapple = Math.floor(Math.random() * 30);
    return grapple;
  }
  grappletThrow() {
    const grappleThrow = Math.round(Math.random() * 20);
    return grappleThrow;
  }
  grapple2() {
    const grapple2 = Math.round(Math.random() * 20);
    return grapple2;
  }
  grapple3() {
    const grapple3 = Math.round(Math.random() * 20);
    return grapple3;
  }
  winFight() {
    this.#wins++;
  }
  loseFight() {
    this.#losses++;
  }
  drawFight() {
    this.#draws++;
  }
}
