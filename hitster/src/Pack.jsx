import {useState} from "react";
import Card from "./Card";

const P1 = [{title: "Echoes in Rain", year: "1928", artist: "Lyra"},
            {title: "Velvet Horizons", year: "1932", artist: "Mira"},
            {title: "Fragments of Tomorrow", year: "1936", artist: "Aria"},
            {title: "Neon Reverie", year: "1940", artist: "Nova"},
            {title: "Whispers of the Wild", year: "1944", artist: "Stella"}];

const P2 = [{title: "Echoes in Rain", year: "1928", artist: "Lyra"}]
//,
//            {title: "Velvet Horizons", year: "1932", artist: "Mira"},
//            {title: "Fragments of Tomorrow", year: "1936", artist: "Aria"},
//            {title: "Neon Reverie", year: "1940", artist: "Nova"},
//            {title: "Whispers of the Wild", year: "1944", artist: "Stella"}];



function Pack(){
    const [pack, setPack] = useState(P1);

    function removeCard(){
        setPack(P2);
    }
    return(
        <>
        <button onClick = {removeCard}>Remove</button>
        {pack.map((item) => <Card year = {item.year} title = {item.title} artist = {item.artist}/>)}
        
        </>
        
    );
}
export default Pack;
