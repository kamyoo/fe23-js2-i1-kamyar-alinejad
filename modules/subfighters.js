import Fighters from "./fighters.js";

export default class Subfighter extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;
  #record;

  constructor(name, style) {
    // super('Tobb', 1985);
    super(name, style);
    this.#setRecord();
  }
  punch() {}
  winFight() {
    this.#wins++;
    this.#setRecord();
  }
  loseFight() {
    this.#losses++;
    this.#setRecord();
  }
  drawFight() {
    this.#draws++;
    this.#setRecord();
  }
  // getRecord(){
  //     return this.#record;
  // }
  // #setRecord(){
  //     this.#record = `${this.#wins}-${this.#losses}-${this.#draws}`;
  // }
}
