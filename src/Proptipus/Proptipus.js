import React from "react";
import "./Proptipus.css";
import TentacleOne from "./Tentacles/TentacleOne";
import TentacleTwo from "./Tentacles/TentacleTwo";
import TentacleThree from "./Tentacles/TentacleThree";
import TentacleFour from "./Tentacles/TentacleFour";
import TentacleFive from "./Tentacles/TentacleFive";
import TentacleSix from "./Tentacles/TentacleSIx";
import TentacleSeven from "./Tentacles/TentacleSeven";
import TentacleEight from "./Tentacles/TentacleEight";
import ProptipusBackground from "../images/Proptipus.png";
import ProptipusLogo from "../images/ProptipusLogo.png";
class Proptipus extends React.Component {
  state = {
    punchline: "Ten-tickles! Get it? Like... ...tentacles...because... please just...please be my friend.",
    magicNumber: 42,
  };

  render() {
    return (
      <div className="proptipus">
        <img className="logo" src={ProptipusLogo} />
        <img className="proptipus-image" src={ProptipusBackground} />
        <TentacleOne punchline={this.state.punchline} />
        <TentacleTwo />
        <TentacleThree />
        <TentacleFour />
        <TentacleFive />
        <TentacleSix />
        <TentacleSeven />
        <TentacleEight />
      </div>
    );
  }
}

export default Proptipus;
