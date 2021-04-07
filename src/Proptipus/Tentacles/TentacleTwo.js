import React from "react";
import tempImg from "../../images/SadFish.jpeg"

class TentacleTwo extends React.Component {

  // card data looks like this
      // name: "Red Eye Tetra",
      // image: "https://aquadiction.world/img/profile/red-eye-tetra1.jpg",
      // type: "[DIVINE-BEAST]",
      // attack: 9001,
      // description:
      //   "Robust and lively, Tetra make a great addition to any fish army."

  card = this.props.fishGiOhCard

  render() {
    return (
      <div className="tentacle-two">
      <span className="fish-name">
        { null /* Fish name goes here */}
      </span>

      <img alt="fish" className="fish-image" 
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
