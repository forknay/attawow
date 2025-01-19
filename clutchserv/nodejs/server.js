const Player = require("./player.js");
const Game = require("./game.js");
const Card = require("./card.js");

const player_list = new Map();
const card_list = [];

const card1 = new Card("Ed Sheeran", "Shape Of You", 2017, "../../hitster/songs/song1.mp3");  
const card2 = new Card("Passenger", "Let Her Go", 2012, "../../hitster/songs/song2.mp3");
const card3 = new Card("George Michael", "Careless Whisper", 1984, "../../hitster/songs/song3.mp3");
const card4 = new Card("Maneskin", "Beggin", 2017, "../../hitster/songs/song4.mp3");
const card5 = new Card("One Direction", "Night Changes", 2014, "../../hitster/songs/song5.mp3");
const card6 = new Card("Adele", "Skyfall", 2012, "../../hitster/songs/song6.mp3");
const card7 = new Card("PSY", "Gangnam Style", 2013, "../../hitster/songs/song7.mp3");
const card8 = new Card("Lukas Graham", "7 Years", 2015, "../../hitster/songs/song8.mp3");  
const card9 = new Card("The Neighbourhood", "Sweater Weather", 2013, "../../hitster/songs/song9.mp3");
const card10 = new Card("Eminem", "Mockingbird", 2004, "../../hitster/songs/song10.mp3");
const card11 = new Card("Maroon 5", "Animals", 2014, "../../hitster/songs/song11.mp3");
const card12 = new Card("Rose, Bruno Mars", "APT", 2024, "../../hitster/songs/song12.mp3");
const card13 = new Card("Michael Jackson", "Beat It", 1982, "../../hitster/songs/song13.mp3");
const card14 = new Card("Benson Boone", "In the Stars", 2022, "../../hitster/songs/song14.mp3");
const card15 = new Card("BTS", "Fire", 2016, "../../hitster/songs/song15.mp3");

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

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/src')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

const server = app.listen(PORT, () => {
  console.log("Server is running on port 3000")
});

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('Server connection: ' + socket.id);
  const new_player = new Player(socket.id, 0);
  player_list.set(socket.id, new_player);

  socket.emit('currentPlayers', Array.from(player_list.values()));

  socket.broadcast.emit('new_player', new_player);

  io.socket.on('disconnect', () => {
    console.log('User disconnected');
    
    player_list.delete(socket.id);
    
    io.emit('playerDisconnected', socket.id);
  });
}

const game = new Game(player_list, card_list);

io.socket.on('start', game.gameStart());

//socket.on('move', gameturn);

//io.sockets.emit('conclusion', endofturn);
