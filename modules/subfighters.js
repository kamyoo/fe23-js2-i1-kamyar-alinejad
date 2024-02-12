import Fighters from "./fighters.js";

export default class Subfighter extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;
  hp = 100;

  constructor(name, style, hp) {
    super(name, style, hp);
  }
  punch() {
    const punch = Math.floor(Math.random() * 20);
    console.log(punch);
    return punch;
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
