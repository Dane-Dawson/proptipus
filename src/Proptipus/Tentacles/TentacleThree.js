import React from "react";

function TentacleThree({ fishGiOhCard }){

    return (
      <div className="tentacle-three">
      <span className="fish-name">
          { fishGiOhCard.name }
        </span>

        <img className="fish-image" 
        src={ fishGiOhCard.image }
        alt='hated fish-gi-oh card' 
        />

        <span className="fish-type">
          { fishGiOhCard.type }
        </span>

        <span className="fish-description">
          { fishGiOhCard.description }
        </span>

        <span className="fish-attack">
          { fishGiOhCard.attack }
        </span>
      </div>
    );
}

export default TentacleThree;
