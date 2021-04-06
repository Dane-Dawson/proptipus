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
    punchline:
      "Ten-tickles! Get it? Like... ...tentacles...because... please just...please be my friend.",
    magicNumber: 42,
    favoriteFishGiOhCard: {
      name: "Red Eye Tetra",
      image: "https://aquadiction.world/img/profile/red-eye-tetra1.jpg",
      type: "[DIVINE-BEAST]",
      attack: 9001,
      description:
        "Robust and lively, Tetra make a great addition to any fish army.",
    },
    hatedFishGiOhCard: {
      name: "No Eye Fsh",
      image: "https://scx2.b-cdn.net/gfx/news/2017/howdoblindca.jpg",
      type: "[DIVINE-BEAST]",
      attack: "How?",
      description: "What a useless freaking fsh.",
    },
    friendsList: [
      { name: "Poptipus", contact: "RadDad@aol.com", socialMedia: "" }
    ],
  };

  render() {
    return (
      <div className="proptipus">
        <img className="logo" src={ProptipusLogo} />
        <img className="proptipus-image" src={ProptipusBackground} />
        <TentacleOne punchline={this.state.punchline} />
        <TentacleTwo card={this.state.favoriteFishGiOhCard} />
        <TentacleThree card={this.state.hatedFishGiOhCard} />
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
