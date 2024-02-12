import Fighters from "./modules/fighters.js";

const fighter1 = new Fighters("Tobbe", "karate");
fighter1.present();

document.getElementById('startFightBtn').addEventListener('submit', fightForm());
function fightForm(event) {
    let playerOneValue = document.getElementById('playerOneInput').value;
    
    playerOneValue.
}