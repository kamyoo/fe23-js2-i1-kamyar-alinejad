import Fighters from "./fighters.js";

export default class Subfighter4 extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;
  hp = 100;

  constructor(name, style) {
    super(name, style, 300);
  }
  punch() {
    const punch = Math.round(Math.random() * 20);
    return punch;
  }
  kick() {
    const kick = Math.round(Math.random() * 20);
    return kick;
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
