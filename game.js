import Player from './player.js'
import Card from './card.js'

var Turn;
var playerList = [];
var cardList = [];


function gameSetup() {
    const player1 = new Player(1, 0);
    const player2 = new Player(2, 0);

    playerList.push(player1);
    playerList.push(player2);

    const card1 = new Card("artist1", "song1", 2004);
    const card2 = new Card("artist2", "song2", 2006);
    const card3 = new Card("artist1", "song1", 1996);
    const card4 = new Card("artist2", "song2", 2019);

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


function gameContinue() {
    Turn += 1;
}


function gameEnd() {

}

/*
var timeLeft = 30;
var elem = document.getElementById('some_div');
    
var timerId = setInterval(countdown, 1000);
    
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}
    */

gameSetup();
gameStart();