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
      
      
      render() {
        let card = this.props.favoriteFishGiOhCard
    return (
      <div className="tentacle-two">
      <span className="fish-name">
        { card.name}
      </span>

      <img alt="fish" className="fish-image" 
      src={ this.props.favoriteFishGiOhCard.image} />

      <span className="fish-type">
        { card.type}
      </span>

      <span className="fish-description">
        { card.description}
      </span>

      <span className="fish-attack">
        { card.attack}
      </span>

    </div>
    );
  }
}

export default TentacleTwo;
