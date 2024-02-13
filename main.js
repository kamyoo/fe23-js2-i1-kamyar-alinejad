import Fighters from "./modules/fighters.js";
import Subfighter1 from "./modules/subfighter1.js";
import Subfighter2 from "./modules/subfighter2.js";

const fighter1 = new Fighters("Tobbe", "karate");

const fighter2 = new Subfighter1("kamy", "ninja");
const fighter3 = new Subfighter2("kamy", "ninja");

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
  const p1Wrp = document.getElementById("playerOneWrap");
  const p1 = document.getElementById("playerOneInput").value;
  const p2 = document.getElementById("playerTwoInput").value;
  const p1FightStyle = document.querySelector(
    "#fightingStyle1",
    "select"
  ).value;
  const p2FightStyle = document.querySelector(
    "#fightingStyle2",
    "select"
  ).value;
  console.log(p1, "-", p1FightStyle, p2, "-", p2FightStyle);

  p1Wrp.innerText = "";
  p1Wrp.append(p1, p1FightStyle, p2, p2FightStyle);
});

const punchBtn = document.querySelector("#punch");
const kickBtn = document.querySelector("#kick");

punchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  return fighter3.getHitByOpponent(fighter2.punch());
});

kickBtn.addEventListener("click", (event) => {
  event.preventDefault();
  return fighter2.hitOpponent(fighter2.kick());
});
