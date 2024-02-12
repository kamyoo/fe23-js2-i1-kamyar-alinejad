import Fighters from "./modules/fighters.js";
import Subfighter1 from "./modules/subfighter1.js";

const fighter1 = new Fighters("Tobbe", "karate");
fighter1.present();

const fighter2 = new Subfighter1("kamy", "ninja");
fighter2.punch();
fighter2.present();

const pForm = document.getElementById("playerForm");

// function fightForm(event) {
//     event.preventDefault();
//     const p1Wrp = document.getElementById('playerOneWrap');
//     let playerOneValue = document.getElementById('playerOneInput').value;

//     // p1Wrp.innerHTML = playerOneValue
//     // document.body.p1Wrp.appendChild('h1');
//     console.log(playerOneValue.value)
// }

pForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const p1 = document.getElementById("playerOneInput");
  const p2 = document.getElementById("playerTwoInput");
  const p1FightStyle = document.querySelector(
    "#fightingStyle1",
    "select"
  ).value;
  const p2FightStyle = document.querySelector(
    "#fightingStyle2",
    "select"
  ).value;
  console.log(p1.value, "-", p1FightStyle, p2.value, "-", p2FightStyle);

  const p1Wrp = document.getElementById("playerOneWrap");
  p1Wrp.append(p1.value);
});

const punchBtn = document.querySelector("#punch");
const kickBtn = document.querySelector("#kick");

punchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  return fighter2.hitOpponent(fighter2.punch());
});

kickBtn.addEventListener("click", (event) => {
  event.preventDefault();
  return fighter2.hitOpponent(fighter2.kick());
});
