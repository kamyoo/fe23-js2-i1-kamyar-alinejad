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
const p1punchButton = document.createElement("button");
const p1kickButton = document.createElement("button");
const p1roundKickButton = document.createElement("button");
const p1karatePunchButton = document.createElement("button");

const punchButton = document.createElement("button");
const kickButton = document.createElement("button");
const roundKickButton = document.createElement("button");
const karatePunchButton = document.createElement("button");
const p2Div = document.querySelector(".p2btndiv");
const p1Div = document.querySelector(".p1btndiv");
export function showKarateButtonsP1(p1, p2) {
  p1punchButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.punch());
    showFighterHp(p1, p2);
  });
  p1kickButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.kick());
    showFighterHp(p1, p2);
  });
  p1roundKickButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.roundKick());
    showFighterHp(p1, p2);
  });
  p1karatePunchButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.karatePunch());
    showFighterHp(p1, p2);
  });
  p1punchButton.innerText = "Punch";
  p1kickButton.innerText = "Kick";
  p1roundKickButton.innerText = "Round-Kick";
  p1karatePunchButton.innerText = "KaratePunch";

  p1Div.append(p1kickButton);
  p1Div.append(p1punchButton);
  p1Div.append(p1roundKickButton);
  p1Div.append(p1karatePunchButton);
}

export function showKarateButtonsP2(p2, p1) {
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

export function showBoxingButtonsP1(p1, p2) {
  const uppercutButton = document.createElement("button");
  const jabButton = document.createElement("button");
  const boxButton = document.createElement("button");
  const biteEarButton = document.createElement("button");
  // const p1Div = document.querySelector(".p1div");
  uppercutButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.uppercut());
    showFighterHp(p1, p2);
  });
  jabButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.jab());
    showFighterHp(p1, p2);
  });
  boxButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.box());
    showFighterHp(p1, p2);
  });
  biteEarButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.biteEar());
    showFighterHp(p1, p2);
  });
  uppercutButton.innerText = "Uppercut";
  boxButton.innerText = "Box";
  jabButton.innerText = "Jab";
  biteEarButton.innerText = "Bite ear";

  p1Div.append(uppercutButton);
  p1Div.append(jabButton);
  p1Div.append(boxButton);
  p1Div.append(biteEarButton);
}

export function showBoxingButtonsP2(p2, p1) {
  const uppercutButton = document.createElement("button");
  const jabButton = document.createElement("button");
  const boxButton = document.createElement("button");
  const biteEarButton = document.createElement("button");
  // const p2Div = document.querySelector(".p2div");
  uppercutButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.uppercut());
    showFighterHp(p1, p2);
  });
  jabButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.jab());
    showFighterHp(p1, p2);
  });
  boxButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.box());
    showFighterHp(p1, p2);
  });
  biteEarButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.biteEar());
    showFighterHp(p1, p2);
  });
  uppercutButton.innerText = "Uppercut";
  boxButton.innerText = "Box";
  jabButton.innerText = "Jab";
  biteEarButton.innerText = "Bite ear";

  p2Div.append(uppercutButton);
  p2Div.append(jabButton);
  p2Div.append(boxButton);
  p2Div.append(biteEarButton);
}

export function showGrapplerButtonsP1(p1, p2) {
  const grappleButton = document.createElement("button");
  const grapplethrowButton = document.createElement("button");
  const grapple2Button = document.createElement("button");
  const grapple3Button = document.createElement("button");
  // const p1Div = document.querySelector(".p1div");
  grappleButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.grapple());
    showFighterHp(p1, p2);
  });
  grapplethrowButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.grapplethrow());
    showFighterHp(p1, p2);
  });
  grapple2Button.addEventListener("click", () => {
    p2.getHitByOpponent(p1.grapple2());
    showFighterHp(p1, p2);
  });
  grapple3Button.addEventListener("click", () => {
    p2.getHitByOpponent(p1.grapple3());
    showFighterHp(p1, p2);
  });
  grappleButton.innerText = "Grapple";
  grapplethrowButton.innerText = "Grapple throw";
  grapple2Button.innerText = "Grapple2";
  grapple3Button.innerText = "Grapple3";

  p1Div.append(grappleButton);
  p1Div.append(grapplethrowButton);
  p1Div.append(grapple2Button);
  p1Div.append(grapple3Button);
}

export function showGrapplerButtonsP2(p2, p1) {
  const grappleButton = document.createElement("button");
  const grapplethrowButton = document.createElement("button");
  const grapple2Button = document.createElement("button");
  const grapple3Button = document.createElement("button");
  // const p2Div = document.querySelector(".p2div");
  grappleButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.grapple());
    showFighterHp(p1, p2);
  });
  grapplethrowButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.grapplethrow());
    showFighterHp(p1, p2);
  });
  grapple2Button.addEventListener("click", () => {
    p1.getHitByOpponent(p2.grapple2());
    showFighterHp(p1, p2);
  });
  grapple3Button.addEventListener("click", () => {
    p1.getHitByOpponent(p2.grapple3());
    showFighterHp(p1, p2);
  });
  grappleButton.innerText = "Grapple";
  grapplethrowButton.innerText = "Grapple throw";
  grapple2Button.innerText = "Grapple2";
  grapple3Button.innerText = "Grapple3";

  p2Div.append(grappleButton);
  p2Div.append(grapplethrowButton);
  p2Div.append(grapple2Button);
  p2Div.append(grapple3Button);
}

export function showKickboxingButtonsP1(p1, p2) {
  const kickAndPunchButton = document.createElement("button");
  const kickButton = document.createElement("button");
  const roundKickButton = document.createElement("button");
  const flyKickButton = document.createElement("button");
  // const p1Div = document.querySelector(".p1div");
  kickAndPunchButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.kickAndPunch());
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
  flyKickButton.addEventListener("click", () => {
    p2.getHitByOpponent(p1.flyKick());
    showFighterHp(p1, p2);
  });
  kickAndPunchButton.innerText = "Kick & punch";
  kickButton.innerText = "Kick";
  roundKickButton.innerText = "roundkick";
  flyKickButton.innerText = "Flykick";

  p1Div.append(kickAndPunchButton);
  p1Div.append(kickButton);
  p1Div.append(roundKickButton);
  p1Div.append(flyKickButton);
}
export function showKickboxingButtonsP2(p2, p1) {
  const kickAndPunchButton = document.createElement("button");
  const kickButton = document.createElement("button");
  const roundKickButton = document.createElement("button");
  const flyKickButton = document.createElement("button");
  // const p2Div = document.querySelector(".p2div");
  kickAndPunchButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.kickAndPunch());
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
  flyKickButton.addEventListener("click", () => {
    p1.getHitByOpponent(p2.flyKick());
    showFighterHp(p1, p2);
  });
  kickAndPunchButton.innerText = "Kick & punch";
  kickButton.innerText = "Kick";
  roundKickButton.innerText = "roundkick";
  flyKickButton.innerText = "Flykick";

  p2Div.append(kickAndPunchButton);
  p2Div.append(kickButton);
  p2Div.append(roundKickButton);
  p2Div.append(flyKickButton);
}
