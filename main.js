import Fighters from "./modules/fighters.js";
import Subfighter from "./modules/subfighters.js";

const fighter1 = new Fighters("Tobbe", "karate");
fighter1.present();

const fighter2 = new Subfighter("kamy", "ninja");
fighter2.punch();
fighter2.present();
// function fightForm(event) {
//     event.preventDefault();
//     const p1Wrp = document.getElementById('playerOneWrap');
//     let playerOneValue = document.getElementById('playerOneInput').value;

//     // p1Wrp.innerHTML = playerOneValue
//     // document.body.p1Wrp.appendChild('h1');
//     console.log(playerOneValue.value)
// }

// document.getElementById('startFightBtn').addEventListener('submit', (event) => {
//     const p1 = document.getElementById('playerOneInput');
//     console.log(p1.value)
// });
