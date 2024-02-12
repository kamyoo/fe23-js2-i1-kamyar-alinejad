import Fighters from "./modules/fighters.js";
import Subfighter from "./modules/subfighters.js";

const fighter1 = new Fighters("Tobbe", "karate");
fighter1.present();

const fighter2 = new Subfighter("kamy", "ninja");
fighter2.punch();
fighter2.present();
