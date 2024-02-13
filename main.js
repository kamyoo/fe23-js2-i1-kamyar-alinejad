import Fighters from "./modules/fighters.js";
import Subfighter1 from "./modules/subfighter1.js";
import Subfighter2 from "./modules/subfighter2.js";
import Subfighter3 from "./modules/subfighter3.js";
import Subfighter4 from "./modules/subfighter4.js";

const pForm = document.getElementById("playerForm");

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

const karateFighter = new Subfighter1();
// const grappleFighter = new Subfighter2(playerName, style);
// const boxingFighter = new Subfighter3(playerName, style);
// const kickboxFighter = new Subfighter4(playerName, style);

pForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(p1, "-", p1FightStyle, p2, "-", p2FightStyle);
  console.log(karateFighter)
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
