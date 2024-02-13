import Fighters from "./fighters.js";

export default class Subfighter2 extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;
  hp = 100;

  constructor(name, style, hp) {
    super(name, style, hp);
  }
  grapplethrow() {
    const grapplethrow = Math.floor(Math.random() * 30);
    return grapplethrow;
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
