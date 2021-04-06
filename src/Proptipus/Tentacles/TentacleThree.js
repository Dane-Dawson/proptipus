import React from "react";

function TentacleThree(props){

    return (
      <div className="tentacle-three">
      <span className="fish-name">
          {props.card.name}
        </span>

        <img className="fish-image" 
        src={props.card.image} />

        <span className="fish-type">
          {props.card.type}
        </span>

        <span className="fish-description">
          {props.card.description}
        </span>

        <span className="fish-attack">
          {props.card.attack}
        </span>
      </div>
    );
}

export default TentacleThree;
