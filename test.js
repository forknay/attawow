import Player from "./player.js";
import Game from "./game.js";
import Card from "./card.js";

const player_list = [];
const card_list = [];

const player1 = new Player(1, 0);
const player2 = new Player(2, 0);
const player3 = new Player(3, 0);

player_list.push(player1);
player_list.push(player2);
player_list.push(player3);

const card1 = new Card("artist1", "song1", 2004, "a");  
const card2 = new Card("artist2", "song2", 2006, "b");
const card3 = new Card("artist3", "song3", 1996, "c");
const card4 = new Card("artist4", "song4", 2019, "d");
const card5 = new Card("artist5", "song5", 2011, "e");
const card6 = new Card("artist6", "song6", 2012, "f");
const card7 = new Card("artist7", "song7", 2016, "g");

card_list.push(card1);
card_list.push(card2);
card_list.push(card3);
card_list.push(card4);
card_list.push(card5);
card_list.push(card6);
card_list.push(card7);

const game = new Game(player_list, card_list);
game.gameStart();
game.gameTurn();