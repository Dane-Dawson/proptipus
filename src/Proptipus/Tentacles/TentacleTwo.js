import React from "react";
import tempImg from "../../images/SadFish.jpeg"

class TentacleTwo extends React.Component {
  render() {
    return (
      <div className="tentacle-two">
        <span className="fish-name">
          { null /* Fish name goes here */}
        </span>

        <img className="fish-image" 
        src={ tempImg /* Fish image goes here */} />

        <span className="fish-type">
          { null /* Fish type goes here */}
        </span>

        <span className="fish-description">
          { null /* Fish description goes here */}
        </span>

        <span className="fish-attack">
          { null /* Fish attack goes here */}
        </span>

      </div>
    );
  }
}

export default TentacleTwo;
