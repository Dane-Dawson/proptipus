import React from "react";

class TentacleSeven extends React.Component {
  toggleMovies = this.props.toggleMovies;

  changeMoviesFilter = this.props.changeMoviesFilter;

  render() {
    return (
      <div className="tentacle-seven">
        <br />
        <input
          className="show-toggle"
          type="radio"
          value="show" 
          checked={ null /* What do we do with this guy?! */} 
          onClick={ null /* You may want a function here */} /> 
        <span className="show-text">Show</span>
        <br />
        <input 
        className="hide-toggle" 
        type="radio" 
        value="hide" 
        checked={ null /* What do we do with this guy?! */} 
        onClick={ null /* You may want a function here */} /> 
        <span className="hide-text">Hide</span>
        <br />
        <span className="genre-picker">Genre?</span>
        <select className="genre-selector" onChange={ null /* You'll probably want a function here */}>
          <option value="All">All</option>
          <option value="Horror">Horror</option>
          <option value="Suspense">Suspense</option>
          <option value="Family">Family</option>
        </select>
      </div>
    );
  }
}

export default TentacleSeven;
