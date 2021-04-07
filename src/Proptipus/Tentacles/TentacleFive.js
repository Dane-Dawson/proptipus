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
      onClick={null /* Decrement function goes here */}>-</button>
      <button className="magic-remote-button color-2" 
      onClick={null /* Increment function goes here */}>+</button>
      <br/>
      </div>
    );
  }
}

export default TentacleFive;
