import React from "react";
import TentacleOne from "./Tentacles/TentacleOne";
import TentacleTwo from "./Tentacles/TentacleTwo";
import TentacleThree from "./Tentacles/TentacleThree";
import TentacleFour from "./Tentacles/TentacleFour";
import TentacleFive from "./Tentacles/TentacleFive";
import TentacleSix from "./Tentacles/TentacleSIx";
import TentacleSeven from "./Tentacles/TentacleSeven";
import TentacleEight from "./Tentacles/TentacleEight";

class Proptipus extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Proptipus</h1>
        <TentacleOne />
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
