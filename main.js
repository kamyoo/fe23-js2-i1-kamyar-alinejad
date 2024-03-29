import {
  showFighterHp,
  showKarateButtonsP1,
  showKarateButtonsP2,
  showBoxingButtonsP1,
  showBoxingButtonsP2,
  showGrapplerButtonsP1,
  showGrapplerButtonsP2,
  showKickboxingButtonsP1,
  showKickboxingButtonsP2,
} from "./modules/fight.js";
import Karatefighter from "./modules/Karatefighter.js";
import Grappler from "./modules/Grappler.js";
import BoxingFighter from "./modules/Boxingfighter.js";
import KickboxFighter from "./modules/Kickboxer.js";
import Fighters from "./modules/fighters.js";

const pForm = document.getElementById("playerForm");
let fighter = null;
let fighter2 = null;
const p1div = document.querySelector(".p1div");
const p2div = document.querySelector(".p2div");
const p1H1 = document.createElement("h1");
const p2H1 = document.createElement("h1");
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
      p1div.className = "newclass";
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
    fighter.karateImage(p1div);
  } else if (p1FightStyle === "boxing") {
    showBoxingButtonsP1(fighter, fighter2);
    fighter.boxerImage(p1div);
  } else if (p1FightStyle === "grapple") {
    showGrapplerButtonsP1(fighter, fighter2);
    fighter.grapplerImage(p1div);
  } else if (p1FightStyle === "kickbox") {
    showKickboxingButtonsP1(fighter, fighter2);
    fighter.kickBoxerImage(p1div);
  }

  if (p2FightStyle === "karate") {
    showKarateButtonsP2(fighter2, fighter);
    fighter2.karateImage(p2div);
  } else if (p2FightStyle === "boxing") {
    showBoxingButtonsP2(fighter2, fighter);
    fighter2.boxerImage(p2div);
  } else if (p2FightStyle === "grapple") {
    showGrapplerButtonsP2(fighter2, fighter);
    fighter2.grapplerImage(p2div);
  } else if (p2FightStyle === "kickbox") {
    showKickboxingButtonsP2(fighter2, fighter);
    fighter2.kickBoxerImage(p2div);
  }
  pForm.innerHTML = "";

  p1H1.innerText = fighter.getName();
  p1div.prepend(p1H1);

  p2H1.innerText = fighter2.getName();
  p2div.prepend(p2H1);
});
