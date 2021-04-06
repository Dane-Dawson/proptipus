import React from "react";

class TentacleSeven extends React.Component {
  render() {
    return (
      <div className="tentacle-seven">
      <span className="show-movies">Toggle Movie Show</span>
      <br/>
        <input 
        type="radio" 
        value="show"
        checked={null}
        onChange={null}
        /> Show
        <br/>
        <input 
        type="radio" 
        value="hide"
        checked={null}
        onChange={null}
        /> Hide
        <br/>
        <span className="genre-picker">Pick a genre</span>
        <select >
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
