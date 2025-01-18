import React from 'react';
var songTitle = "Card Title"
var artist = "Artist"
var year = "Year"


function Card(){
    return(
        <div className="card">
            <h2>{year}</h2>
            <p>{songTitle}</p>
            <p>{artist}</p>
        </div>
    );


}

export default Card