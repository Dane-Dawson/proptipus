import React from "react";

class TentacleSeven extends React.Component {
  render() {
    return (
      <div className="tentacle-seven">
        <br />
        <input
          className="show-toggle"
          type="radio"
          value="show"
          checked={null}
          onChange={null}
        />
        <span className="show-text">Show</span>
        <br />
        <input 
        className="hide-toggle" 
        type="radio" 
        value="hide" 
        checked={null} 
        onChange={null} /> 
        <span className="hide-text">Hide</span>
        <br />
        <span className="genre-picker">Genre?</span>
        <select className="genre-selector">
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
