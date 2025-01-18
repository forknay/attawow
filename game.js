import Player from './player.js'
import Card from './card.js'

let playerList = [];
let cardList = [];
let gameState = true;


function gameSetup() {
    const player1 = new Player(1, 0);
    const player2 = new Player(2, 0);

    playerList.push(player1);
    playerList.push(player2);

    const card1 = new Card("artist1", "song1", 2004);
    const card2 = new Card("artist2", "song2", 2006);
    const card3 = new Card("artist3", "song3", 1996);
    const card4 = new Card("artist4", "song4", 2019);

    cardList.push(card1);
    cardList.push(card2);
    cardList.push(card3);
    cardList.push(card4);
}


function gameStart() {
    for (let player of playerList) {
        var i = Math.random(cardList.length);
        player.addCard(cardList[i]);
        cardList.splice(i, 1);
    }
}

async function turnTimer() {
    var counter = 30;
        
    const interval = setInterval(() => {
        console.log(counter);
        counter--;
    
        if (counter < 0 ) {
        clearInterval(interval);
        }
    }, 1000);

}

function gameEnd() {
    gameState = false;
    console.log("Game Over!");
}

gameSetup();
gameStart();