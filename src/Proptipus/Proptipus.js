import React from "react";
import "./Proptipus.css";
import ProptipusBackground from "../images/Proptipus.png";
import ProptipusLogo from "../images/ProptipusLogo.png";

// This is the state being imported in for cleanliness
import ProptipusState from "./ProptipusState"


import TentacleOne from "./Tentacles/TentacleOne";
import TentacleTwo from "./Tentacles/TentacleTwo";
import TentacleThree from "./Tentacles/TentacleThree";
import TentacleFour from "./Tentacles/TentacleFour";
import TentacleFive from "./Tentacles/TentacleFive";
import TentacleSix from "./Tentacles/TentacleSixth.js";
import TentacleSeven from "./Tentacles/TentacleSeven";
import TentacleEight from "./Tentacles/TentacleEight";
class Proptipus extends React.Component {
  state = ProptipusState

  increase = () => {
    this.setState({magicNumber: this.state.magicNumber + 1})
  }

  decrease = () => {
    this.setState({magicNumber: this.state.magicNumber - 1})
  }

  render() {
    return (
      <div className="proptipus">
        <img className="logo" src={ProptipusLogo} alt="logo" />
        <img
          className="proptipus-image"
          src={ProptipusBackground}
          alt="background"
        />
        <TentacleOne punchline={this.state.punchline}/>
        <TentacleTwo favoriteFishGiOhCard={this.state.favoriteFishGiOhCard}/>
        <TentacleThree hatedCard={this.state.hatedFishGiOhCard}/>
        <TentacleFour friendsList={this.state.friendsList}/>
        <TentacleFive increase={this.increase} decrease={this.decrease}/>
        <TentacleSix magicNumber={this.state.magicNumber}/>
        <TentacleSeven/>
        <TentacleEight/>
      </div>
    );
  }
}

export default Proptipus;
