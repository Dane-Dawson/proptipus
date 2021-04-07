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
          checked={this.props.showMovies === true}
          onClick={(e) => this.toggleMovies(e.target.value)}
        />
        <span className="show-text">Show</span>
        <br />
        <input
          className="hide-toggle"
          type="radio"
          value="hide"
          checked={this.props.showMovies === false}
          onClick={(e) => this.toggleMovies(e.target.value)}
        />
        <span className="hide-text">Hide</span>
        <br />
        <span className="genre-picker">Genre?</span>
        <select
          className="genre-selector"
          onChange={(e) => this.changeMoviesFilter(e.target.value)}
        >
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
