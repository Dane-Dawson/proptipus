// Styling
import React from "react";
import "./Proptipus.css";
import ProptipusBackground from "../images/Proptipus.png";
import ProptipusLogo from "../images/ProptipusLogo.png";

// Components
import TentacleOne from "./Tentacles/TentacleOne";
import TentacleTwo from "./Tentacles/TentacleTwo";
import TentacleThree from "./Tentacles/TentacleThree";
import TentacleFour from "./Tentacles/TentacleFour";
import TentacleFive from "./Tentacles/TentacleFive";
import TentacleSix from "./Tentacles/TentacleSixth.js";
import TentacleSeven from "./Tentacles/TentacleSeven";
import TentacleEight from "./Tentacles/TentacleEight";

// just extracted out proptipus data.. literally only to make it slightly more
// readable
import proptipusData from './proptipusData'


class Proptipus extends React.Component {
  state = proptipusData;

  // This is where you will be writing most of your functions!

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
        <TentacleTwo />
        {/* Maybe include lil bit about how you can destructure right in the prop
            declaration
         */}
        <TentacleThree {...this.state.hatedFishGiOhCard}/>
        <TentacleFour/>
        <TentacleFive/>
        <TentacleSix/>
        <TentacleSeven/>
        <TentacleEight/>
      </div>
    );
  }
}

export default Proptipus;
