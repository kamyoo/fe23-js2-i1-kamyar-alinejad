import {
  showFighterHp,
  showKarateButtonsP1,
  showKarateButtonsP2,
  showBoxingButtonsP1,
  showBoxingButtonsP2,
  showGrapplerButtonsP1,
  showGrapplerButtonsP2,
} from "./modules/fight.js";
import Karatefighter from "./modules/Karatefighter.js";
import Grappler from "./modules/Grappler.js";
import BoxingFighter from "./modules/Boxingfighter.js";
import KickboxFighter from "./modules/Kickboxer.js";
import Fighters from "./modules/fighters.js";

const pForm = document.getElementById("playerForm");
let fighter = null;
let fighter2 = null;

pForm.addEventListener("submit", (event) => {
  event.preventDefault();
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
  fighter = new Karatefighter(p1, 100);
  fighter2 = new Karatefighter(p2, 100);

  switch (p1FightStyle) {
    case "karate":
      fighter = new Karatefighter(p1, 100);
      break;
    case "boxing":
      fighter = new BoxingFighter(p1, 100);
      break;
    case "grapple":
      fighter = new Grappler(p1, 100);
      break;
    case "kickbox":
      fighter = new KickboxFighter(p1, 100);
      break;
  }
  switch (p2FightStyle) {
    case "karate":
      fighter2 = new Karatefighter(p2, 100);
      break;
    case "boxing":
      fighter2 = new BoxingFighter(p2, 100);
      break;
    case "grapple":
      fighter2 = new Grappler(p2, 100);
      break;
    case "kickbox":
      fighter2 = new KickboxFighter(p2, 100);
      break;
  }
  if (p1FightStyle === "karate") {
    showKarateButtonsP1(fighter, fighter2);
  } else if (p1FightStyle === "boxing") {
    showBoxingButtonsP1(fighter, fighter2);
  } else if (p1FightStyle === "grapple") {
    showGrapplerButtonsP1(fighter, fighter2);
  }

  if (p2FightStyle === "karate") {
    showKarateButtonsP2(fighter2, fighter);
  } else if (p2FightStyle === "boxing") {
    showBoxingButtonsP2(fighter2, fighter);
  } else if (p2FightStyle === "grapple") {
    showGrapplerButtonsP2(fighter2, fighter);
  }
  pForm.innerHTML = "";
  const p1div = document.querySelector(".p1div");
  const p2div = document.querySelector(".p2div");
  const p1H1 = document.createElement("h1");
  p1H1.innerText = fighter.getName();
  p1div.prepend(p1H1);
  const p2H1 = document.createElement("h1");
  p2H1.innerText = fighter2.getName();
  p2div.prepend(p2H1);
});

// pForm.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

// const punchBtn = document.querySelector("#punch");
// const kickBtn = document.querySelector("#kick");

// punchBtn.addEventListener("click", (event) => {
//   event.preventDefault();

//   return fighter3.getHitByOpponent(fighter2.punch());
// });

// kickBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   return fighter2.hitOpponent(fighter2.kick());
// });
