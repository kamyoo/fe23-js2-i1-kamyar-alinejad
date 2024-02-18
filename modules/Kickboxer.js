import Fighters from "./fighters.js";
const p1div = document.querySelector(".p1div");
const p2div = document.querySelector(".p2div");

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
  kickBoxerImage(playerside) {
    const kickBoxerImg = document.createElement("img");

    kickBoxerImg.src =
      "https://static.vecteezy.com/system/resources/previews/011/963/236/non_2x/muaythai-kick-boxing-martial-arts-vector.jpg";
    playerside.append(kickBoxerImg);
    kickBoxerImg.className = "kickboxer";
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
