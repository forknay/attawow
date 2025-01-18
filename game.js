export default class Game {
    constructor(player_list, card_list) {
        this.player_list = player_list;
        this.card_list = card_list;
        this.gameState = true;
        this.playing = 0;
    }

    gameStart() {
        for (let player of this.player_list) {
            let start_card = getRandomCard(this.card_list)
            player.addCard(start_card);
        }
    }

    gameTurn() {
        let turn_card = getRandomCard(this.card_list);
        turn_card.playSong();
        
        var counter = 5
        const interval = setInterval(() => {
            counter--;

            if (counter <= 15 && counter >= 0) {
                console.log(counter)
            }

            if (counter < 0 ) {
                clearInterval(interval);
                this.turnEnd();
            }
            //CHECK FOR IO FOR PLAYER ACTION
            // if correct --> add card, else --> turn end
        }, 1000);
    }
    
    turnEnd() {
        console.log(this.playing)
        if (this.player_list[this.playing].getCount == 5) {
            this.gameEnd();
        } else {
            this.playing++;
            this.playing = this.playing % this.player_list.length;
            this.gameTurn();
        }
    } 

    gameEnd() {
        gameState = false;
        console.log("Game Over!");
    }
}

function getRandomCard(card_list) {
    var i = Math.floor(Math.random() * card_list.length);
    let temp_card = card_list[i];
    card_list.splice(i, 1);
    return temp_card;
}

function findIndex(card, card_list) {
    for (var i = 0; i < card_list.length; i++) {
        if (card.getYear() < card_list[i].getYear()) {
            return i;
        }
    }
    return i;
}