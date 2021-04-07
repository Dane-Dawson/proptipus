import React from "react";

class TentacleEight extends React.Component {

  render() {
    return (
      <div className="tentacle-eight">
        { this.props.showMovies ? (
          this.props.movies.map((movie, index) => (
            <span className="movie-card" key={index}>
              <span className="movie-title">{movie.title}</span>
              <br />
              <span className="movie-rating">{movie.rating}</span>
              <br />
            </span>
          ))
        ) : (
          null
        )} 
      </div>
    );
  }
}

export default TentacleEight;
