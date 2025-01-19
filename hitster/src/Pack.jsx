import {useState} from "react";
import Card from "./Card";

var P1 = [{title: "Echoes in Rain", year: "1928", artist: "Lyra"},
            {title: "Velvet Horizons", year: "1932", artist: "Mira"},
            {title: "Neon Reverie", year: "1940", artist: "Nova"},
            {title: "Whispers of the Wild", year: "1944", artist: "Stella"}];

const P2 = [{title: "Echoes in Rain", year: "1928", artist: "Lyra"}]



function Pack(){
    const [pack, setPack] = useState(P1);

    function addCard(index,song){
        let newPack = [...pack];
        newPack.splice(index,0, song)
        setPack(newPack);
    }

    var bla = 0;
    var song = {title: "Fragments of Tomorrow", year: "1936", artist: "Aria"}
    function buttonCard(item, i){
        
        
    return(
        <>
        <button id = {String(i)} onClick = {() => addCard(i,song)}>add card</button>
        <Card year = {item.year} title = {item.title} artist = {item.artist}/>
        </>
    )
    }
    return(
        <>
        
        {pack.map((item) => buttonCard(item, bla++))}
        <button id = {String(bla)} onClick = {() => addCard(bla,song)}>add card</button>
        </>
        
    );
}
export default Pack;
