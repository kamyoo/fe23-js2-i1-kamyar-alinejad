export default class Fighters {
  #name;
  #style;
  constructor(name, style) {
    this.#name = name;
    this.#style = style;
  }
  present() {
    console.log(`My name is ${this.#name} and I am a ${this.#style} fighter`);
  }
}
