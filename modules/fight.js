export function showFighterHp(firstFighter, secondFighter) {
  showFighter(firstFighter, hpEl);
  showFighter(secondFighter, hpEl2);
}

const hpEl = document.createElement("h2");
const hpEl2 = document.createElement("h2");
const h1El = document.createElement("h1");

function showFighter(fighter, newEl) {
  newEl.innerText = "";
  newEl.innerText = fighter.getName() + "s HP: " + fighter.getHp();

  document.body.append(newEl);
  console.log(fighter);

  if (fighter.getHp() <= 0) {
    h1El.innerText = fighter.getName() + " died";
    document.body.append(h1El);
  }
}

export function showKarateButtonsP1(p1, p2) {
  const punchButton = document.createElement("button");
  const kickButton = document.createElement("button");
  const roundKickButton = document.createElement("button");
  const karatePunchButton = document.createElement("button");
  const p1Div = document.querySelector(".p1div");

  punchButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.punch());
    showFighterHp(p1, p2);
  });
  kickButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.kick());
    showFighterHp(p1, p2);
  });
  roundKickButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.roundKick());
    showFighterHp(p1, p2);
  });
  karatePunchButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.karatePunch());
    showFighterHp(p1, p2);
  });
  punchButton.innerText = "Punch";
  kickButton.innerText = "Kick";
  roundKickButton.innerText = "Round-Kick";
  karatePunchButton.innerText = "KaratePunch";

  p1Div.append(kickButton);
  p1Div.append(punchButton);
  p1Div.append(roundKickButton);
  p1Div.append(karatePunchButton);
}

export function showKarateButtonsP2(p2, p1) {
  const punchButton = document.createElement("button");
  const kickButton = document.createElement("button");
  const roundKickButton = document.createElement("button");
  const karatePunchButton = document.createElement("button");
  const p2Div = document.querySelector(".p2div");
  punchButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.punch());
    showFighterHp(p1, p2);
  });
  kickButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.kick());
    showFighterHp(p1, p2);
  });
  roundKickButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.roundKick());
    showFighterHp(p1, p2);
  });
  karatePunchButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.karatePunch());
    showFighterHp(p1, p2);
  });
  punchButton.innerText = "Punch";
  kickButton.innerText = "Kick";
  roundKickButton.innerText = "Round-Kick";
  karatePunchButton.innerText = "KaratePunch";

  p2Div.append(kickButton);
  p2Div.append(punchButton);
  p2Div.append(roundKickButton);
  p2Div.append(karatePunchButton);
}
