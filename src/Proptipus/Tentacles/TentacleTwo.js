import React from "react";

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
          { this.card.name }
        </span>

        <img className="fish-image" 
        src={  this.card.image } alt='fish-gi-oh avatar' />

        <span className="fish-type">
          { this.card.type }
        </span>

        <span className="fish-description">
          { this.card.description }
        </span>

        <span className="fish-attack">
          { this.card.attack }
        </span>

      </div>
    );
  }
}

export default TentacleTwo;
