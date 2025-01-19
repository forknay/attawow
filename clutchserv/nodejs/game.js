class Game {
    constructor(player_list, card_list) {
        this.player_list = player_list;
        this.card_list = card_list;
        this.gameState = true;
    }

    gameStart() {
        if (this.gameState == true) {
            for (let [id, player] of this.player_list) {
                let start_card = getRandomCard(this.card_list)
                player.addCard(start_card);
                console.log(player)
            }
            this.gameTurn();
        }
    }

    gameTurn() {
        if (this.gameState == true) {
            let turn_card = getRandomCard(this.card_list);
            turn_card.playSong();
            
            var counter = 30;
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
    }
    
    turnEnd() {
        if (this.gameState == true) {
            if (Array.from(this.player_list.values())[this.playing].getCount() == 5) {
                this.gameEnd();
            } else {
                this.playing++;
                this.playing = this.playing % this.player_list.size;

                var delay = 3;
                const pause = setInterval(() => {
                    delay--;

                    if (delay < 0) {
                        clearInterval(pause);
                        this.gameTurn();
                    }
                }, 1000);
            }
        }
    }

    gameEnd() {
        this.gameState = false;
        console.log("Game Over!\n" + Array.from(this.player_list.ID())[this.playing] + " won!\n");
    }
}

module.exports = Game;

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