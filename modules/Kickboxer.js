import Fighters from "./fighters.js";

export default class KickboxFighter extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;

  constructor(name, hp) {
    super(name, hp);
  }
  kickAndPunch() {
    const kickAndPunch = Math.round(Math.random() * 20);
    return kickAndPunch;
  }
  kick() {
    const kick = Math.round(Math.random() * 20);
    return kick;
  }
  roundKick() {
    const roundKick = Math.round(Math.random() * 20);
    return roundKick;
  }
  flyKick() {
    const flyKick = Math.round(Math.random() * 20);
    return flyKick;
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
