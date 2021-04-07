import React from "react";

class TentacleEight extends React.Component {
  render() {
    return (
      <div className="tentacle-eight">
        {/* This span is the movie card we are reproducing for each movie */}
        <span className="movie-card">
          <span className="movie-title">{/* Movie title goes here */}</span>
          <br />
          <span className="movie-rating">{/* Movie rating goes here */}</span>
          <br />
        
        </span>
        

      </div>
    );
  }
}

export default TentacleEight;
