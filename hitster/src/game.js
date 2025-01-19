export default class Game {
    constructor(player_list, card_list) {
        this.player_list = player_list;
        this.card_list = card_list;
        this.gameState = true;
    }

    gameStart() {
        if (this.gameState == true) {
            for (let [id, player] of this.player_list) {
                let start_card = getRandomCard(this.card_list)
                player.addCard(0, start_card);
                console.log(player.getDeckLists())
            }
            //this.gameTurn();
        }
    }

    gameTurnStart(){
        let turn_card = getRandomCard(this.card_list);
        let beat = new Audio(turn_card.song);
        beat.play()
        turn_card.playSong();
    }

    gameGuess(guess) {
        var correct = findIndex(turn_card, Array.from(this.player_list.values())[this.playing].getDeck());

        if (correct.includes(guess)) {
            Array.from(this.player_list.values())[this.playing].addCard(guess, turn_card);
        } else {
            this.turnEnd();
        }
    }

    gameTurn(guess) {
        if (this.gameState == true) {
            let turn_card = getRandomCard(this.card_list);
            turn_card.playSong();

            var correct = findIndex(turn_card, Array.from(this.player_list.values())[this.playing].getDeck());

            var counter = 30;
            const interval = setInterval(() => {
                counter--;

                if (counter <= 15 && counter >= 0) {
                    
                }

                if (correct.includes(guess)) {
                    Array.from(this.player_list.values())[this.playing].addCard(guess, turn_card);
                } else {
                    this.turnEnd();
                }

                if (counter < 0 ) {
                    clearInterval(interval);
                    this.turnEnd();
                }
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

function getRandomCard(card_list) {
    var i = Math.floor(Math.random() * card_list.length);
    let temp_card = card_list[i];
    card_list.splice(i, 1);
    return temp_card;
}

function findIndex(card, card_list) {
    var equal = [];
    for (var i = 0; i < card_list.length; i++) {
        if (card.getYear() == card_list[i].getYear()) {
            equal.push(i);
        }
        if (card.getYear() < card_list[i].getYear()) {
            equal.push[i];
            return equal;
        }
    }
    return equal;
}