
import React from 'react';


function Card(song){
    return(
        <div className="card">
            <h2>{song.year}</h2>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            
            
        </div>
    );


}

export default Card