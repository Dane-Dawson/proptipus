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
      {
        name: "Poptipus",
        contact: "RadDad@aol.com",
        socialMedia: "https://twitter.com/octopusfansclub",
      },
      {
        name: "Abikrill",
        contact: "SisFish@yahoo.com",
        socialMedia: "https://en.wikipedia.org/wiki/Krill",
      },
      {
        name: "Axolotl Al",
        contact: "aLotoAx@gmail.com",
        socialMedia: "https://twitter.com/axobotl",
      },
      {
        name: "Gillfunkle",
        contact: "SalmonAndGilfunkle@gmail.com",
        socialMedia: "https://twitter.com/simongarfunkel?lang=en",
      },
    ],
    favoriteMovies: [
      {
        title: "The Gills Have Eyes",
        genre: "Horror",
        review: "'Left me with baited breath'",
      },
      {
        title: "Gone With the Fins",
        genre: "Family",
        review: "'WWII - an important fishue'",
      },
      {
        title: "Bonnie and Cod",
        genre: "Family",
        review: "'Most affable criminals you can sea'",
      },
      { title: "Finding Nemo", genre: "Family", review: "'I love this movie'" },
      {
        title: "Chumdog Millionaire",
        genre: "Suspense",
        review: "'What an oppor-tuna-ty!'",
      },
      {
        title: "12 Angry Fins",
        genre: "Suspense",
        review: "`12 angry, shellfish public servants`",
      },
      {
        title: "The Blair Fish Project",
        genre: "Horror",
        review: "'They must salmon all their courage...'",
      },
      {
        title: "28 Manta Rays Later",
        genre: "Horror",
        review: "'When zombies attack they ray-tion their supplies'",
      },
      {
        title: "Beauty & The Breached Whale",
        genre: "Family",
        review: "'He just wants to cuttle'",
      },
    ],
    showMovies: false,
    moviesFilter: "All",
  };

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
        <TentacleOne/>
        <TentacleTwo/>
        <TentacleThree/>
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
