import React from "react";
import "./Proptipus.css";
import TentacleOne from "./Tentacles/TentacleOne";
import TentacleTwo from "./Tentacles/TentacleTwo";
import TentacleThree from "./Tentacles/TentacleThree";
import TentacleFour from "./Tentacles/TentacleFour";
import TentacleFive from "./Tentacles/TentacleFive";
import TentacleSix from "./Tentacles/TentacleSixth.js";
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
      { name: "Poptipus", contact: "RadDad@aol.com", socialMedia: "https://twitter.com/octopusfansclub" },
      { name: "Abikrill", contact: "SisFish@yahoo.com", socialMedia: ""},
      { name: "Axolotl Al", contact: "aLotoAx@gmail.com", socialMedia: "https://twitter.com/axobotl" },
      { name: "Gillfunkle", contact: "SalmonAndGilfunkle@gmail.com", socialMedia: "https://twitter.com/simongarfunkel?lang=en"},
    ],
    favoriteMovies: [
        {title: "The Gills Have Eyes", genre: "Horror", rating: "3"},
        {title: "Gone With the Fins", genre: "Family", rating: "4"},
        {title: "Bonnie and Cod", genre: "Family", rating: "4"},
        {title: "Finding Nemo", genre: "Family", rating: "4"},
        {title: "Chumdog Millionaire", genre: "Suspense", rating: "4"},
        {title: "12 Angry Fins", genre: "Suspense", rating: "4"},
        {title: "The Blair Fish Project", genre: "Horror", rating: "2"},
        {title: "28 Manta Rays Later", genre: "Horror", rating: "4"},
        {title: "Beauty and The Breached Whale", genre: "Family", rating: "5"},
    ],
    showMovies: false,
    moviesFilter: "Any"
  };

  addOne = () => {
    let newMagicNum = this.state.magicNumber + 1
    this.setState({magicNumber: newMagicNum})
  }

  subtractOne = () => {
    let newMagicNum = this.state.magicNumber - 1
    this.setState({magicNumber: newMagicNum})
  }

  render() {
    return (
      <div className="proptipus">
        <img className="logo" src={ProptipusLogo} />
        <img className="proptipus-image" src={ProptipusBackground} />
        <TentacleOne punchline={this.state.punchline} />
        <TentacleTwo card={this.state.favoriteFishGiOhCard} />
        <TentacleThree card={this.state.hatedFishGiOhCard} />
        <TentacleFour friendsList={this.state.friendsList}/>
        <TentacleFive addOne={this.addOne} subtractOne={this.subtractOne}/>
        <TentacleSix magicNumber={this.state.magicNumber}/>
        <TentacleSeven />
        <TentacleEight />
      </div>
    );
  }
}

export default Proptipus;
