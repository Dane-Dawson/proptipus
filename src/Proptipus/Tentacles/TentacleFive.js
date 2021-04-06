import React from "react";

class TentacleFive extends React.Component {
  render() {
    return (
      <div className="tentacle-five">
      <br/>
      <span className="magic-remote-text">Magic</span>
      <br/>
      <span className="magic-remote-text">Remote</span>
      <br/>
      <button className="magic-remote-button color-1" 
      onClick={null /* replace this null with a function */}>-</button>
      <button className="magic-remote-button color-2" 
      onClick={null /* replace this null with a function */}>+</button>
      <br/>
      <span  className="magic-remote-disclaimer">
      Proptipus to-do: Fix blinky light (batteries?)
      </span>
      </div>
    );
  }
}

export default TentacleFive;
