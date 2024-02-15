import Fighters from "./fighters.js";

export default class BoxingFighter extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;

  constructor(name, hp) {
    super(name, hp);
  }
  uppercut() {
    const uppercut = Math.round(Math.random() * 20);
    return uppercut;
  }
  jab() {
    const jab = Math.round(Math.random() * 20);
    return jab;
  }
  box() {
    const box = Math.round(Math.random() * 20);
    return box;
  }
  biteEar() {
    const biteEar = Math.round(Math.random() * 20);
    return biteEar;
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
