import {useState} from "react";
import React from 'react';
import GameCard from "./CardItem";
import Player from "./player.js";
import Game from "./game.js";
import Card from "./card.js";
import song1 from "/song1.mp3";

const player_list = new Map();
const card_list = [];

const player1 = new Player(1, 0);
const player2 = new Player(2, 0);
const player3 = new Player(3, 0);

player_list.set(1, player1);
player_list.set(2, player2);
player_list.set(3, player3);

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

const game = new Game(player_list, card_list);
game.gameStart();

var P1 = player1.getDeckLists();


const P2 = [{title: "Echoes in Rain", year: "1928", artist: "Lyra"}]

function Pack(){
    const [pack, setPack] = useState(P1);
    
    function addCard(index,song){
        let newPack = [...pack];
        newPack.splice(index,0, song)
        setPack(newPack);
    }
    let audio = new Audio(song1)

    const start = () => {
      audio.play()
    }

    function buttonCard(item, i){

        return(
            <>
            <button id = {String(i)} onClick = {() => addCard(i,song)}>add card</button>
            <GameCard year = {item.year} title = {item.title} artist = {item.artist}/>
            </>
        );
    }

    return(
        <>
        <>
        {pack.map((item) => buttonCard(item, bla++))}
        <button id = {String(bla)} onClick = {() => addCard(bla,song)}>add card</button>
        </>
        <br/>
        <button onClick={start}>Play</button>
        </>
    );
}
export default Pack;
