import {useState} from "react";
import Card from "./Card";

var P1 = [{title: "Echoes in Rain", year: "1928", artist: "Lyra"},
            {title: "Velvet Horizons", year: "1932", artist: "Mira"},
            
            {title: "Neon Reverie", year: "1940", artist: "Nova"},
            {title: "Whispers of the Wild", year: "1944", artist: "Stella"}];

const P2 = [{title: "Echoes in Rain", year: "1928", artist: "Lyra"}]



function Pack(){
    const [pack, setPack] = useState(P1);

    function addCard(){
        let newPack = [...pack];
        newPack.splice(2,0, {title: "Fragments of Tomorrow", year: "1936", artist: "Aria"})
        setPack(newPack);
    }
    return(
        <>
        <button onClick = {addCard}>add card</button>
        {pack.map((item) => <Card year = {item.year} title = {item.title} artist = {item.artist}/>)}
        
        </>
        
    );
}
export default Pack;
