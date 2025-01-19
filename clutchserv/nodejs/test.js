import Player from "./player.js";
import Game from "./game.js";
import Card from "./card.js";

const player_list = new Map();
const card_list = [];

const player1 = new Player(1, 0);
const player2 = new Player(2, 0);
const player3 = new Player(3, 0);

player_list.set(player1.getID(), player1);
player_list.set(player2.getID(), player2);
player_list.set(player3.getID(), player3);

const card1 = new Card("artist1", "song1", 2004, "a");
const card2 = new Card("artist2", "song2", 2006, "b");
const card3 = new Card("artist3", "song3", 1996, "c");
const card4 = new Card("artist4", "song4", 2019, "d");
const card5 = new Card("artist5", "song5", 2011, "e");
const card6 = new Card("artist6", "song6", 2012, "f");
const card7 = new Card("artist7", "song7", 2016, "g");
const card8 = new Card("artist1", "song1", 2004, "a");  
const card9 = new Card("artist2", "song2", 2006, "b");
const card10 = new Card("artist3", "song3", 1996, "c");
const card11 = new Card("artist4", "song4", 2019, "d");
const card12 = new Card("artist5", "song5", 2011, "e");
const card13 = new Card("artist6", "song6", 2012, "f");
const card14 = new Card("artist7", "song7", 2016, "g");
const card15 = new Card("artist7", "song7", 2016, "g");

card_list.push(card1);
card_list.push(card2);
card_list.push(card3);
card_list.push(card4);
card_list.push(card5);
card_list.push(card6);
card_list.push(card7);
card_list.push(card8);
card_list.push(card9);
card_list.push(card10);
card_list.push(card11);
card_list.push(card12);
card_list.push(card13);
card_list.push(card14);
card_list.push(card15);

const game = new Game(player_list, card_list);
game.gameStart();