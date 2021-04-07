import React from "react";
import tempImg from "../../images/SadFish.jpeg"

function TentacleThree({ fishGiOhCard }){

    return (
      <div className="tentacle-three">
      <span className="fish-name">
          {/* Fish name goes here */}
        </span>

        <img className="fish-image" 
        src={ tempImg/* Fish image goes here */} 
        />

        <span className="fish-type">
          {/* Fish type goes here */}
        </span>

        <span className="fish-description">
          {/* Fish description goes here */}
        </span>

        <span className="fish-attack">
          {/* Fish attack goes here */}
        </span>
      </div>
    );
}

export default TentacleThree;
