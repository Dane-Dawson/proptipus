import React from "react";

class TentacleTwo extends React.Component {
  render() {
    return (
      <div className="tentacle-two">
        <span className="fish-name">
          {this.props.card.name}
        </span>

        <img className="fish-image" 
        src={this.props.card.image} />

        <span className="fish-type">
          {this.props.card.type}
        </span>

        <span className="fish-description">
          {this.props.card.description}
        </span>

        <span className="fish-attack">
          {this.props.card.attack}
        </span>

      </div>
    );
  }
}

export default TentacleTwo;
