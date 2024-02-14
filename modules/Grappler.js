import Fighters from "./fighters.js";

export default class Grappler extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;

  constructor(name, hp) {
    super(name, hp);
  }
  grapplethrow() {
    const grapplethrow = Math.floor(Math.random() * 30);
    return grapplethrow;
  }
  punch() {
    const punch = Math.round(Math.random() * 20);
    return punch;
  }
  kick() {
    const kick = Math.round(Math.random() * 20);
    return kick;
  }
  roundKick() {
    const roundKick = Math.round(Math.random() * 20);
    return roundKick;
  }
  karatePunch() {
    const kPunch = Math.round(Math.random() * 20);
    return kPunch;
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
