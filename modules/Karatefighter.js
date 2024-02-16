import Fighters from "./fighters.js";
const p1div = document.querySelector(".p1div");
const p2div = document.querySelector(".p2div");

export default class Karatefighter extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;

  constructor(name, hp) {
    super(name, hp);
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
  karateImage(playerside) {
    const karateImg = document.createElement("img");

    karateImg.src =
      "https://freerangestock.com/sample/116800/karate-fighter-silhouette-.jpg";
    playerside.append(karateImg);
    karateImg.className = "karate";
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
