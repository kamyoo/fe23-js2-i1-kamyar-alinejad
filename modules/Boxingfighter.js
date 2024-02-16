import Fighters from "./fighters.js";
const p1div = document.querySelector(".p1div");
const p2div = document.querySelector(".p2div");
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
  boxerImage(playerside) {
    const boxerImg = document.createElement("img");

    boxerImg.src =
      "https://static.vecteezy.com/system/resources/previews/000/539/479/original/vector-black-white-illustration-of-box-fighter.jpg";
    playerside.append(boxerImg);
    boxerImg.className = "boxer";
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
