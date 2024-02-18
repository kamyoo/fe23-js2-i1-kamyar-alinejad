import Fighters from "./fighters.js";
const p1div = document.querySelector(".p1div");
const p2div = document.querySelector(".p2div");

export default class Grappler extends Fighters {
  #wins = 0;
  #losses = 0;
  #draws = 0;

  constructor(name, hp) {
    super(name, hp);
  }
  grapple() {
    const grapple = Math.floor(Math.random() * 30);
    return grapple;
  }
  grapplerThrow() {
    const grappleThrow = Math.round(Math.random() * 20);
    return grappleThrow;
  }
  grapple2() {
    const grapple2 = Math.round(Math.random() * 20);
    return grapple2;
  }
  grapple3() {
    const grapple3 = Math.round(Math.random() * 20);
    return grapple3;
  }
  grapplerImage(playerside) {
    const grapplerImg = document.createElement("img");

    grapplerImg.src =
      "https://ih1.redbubble.net/image.1298152615.5120/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg";
    playerside.append(grapplerImg);
    grapplerImg.className = "grappler";
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
