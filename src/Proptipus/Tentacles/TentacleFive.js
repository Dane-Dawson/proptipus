import React from "react";

class TentacleFive extends React.Component {

  increaseCount = this.props.increaseCount

  decreaseCount = this.props.decreaseCount

  render() {
    return (
      <div className="tentacle-five">
      <br/>
      <span className="magic-remote-text">Magic</span>
      <br/>
      <span className="magic-remote-text">Remote</span>
      <br/>
      <button className="magic-remote-button color-1" 
      onClick={this.decreaseCount}>-</button>
      <button className="magic-remote-button color-2" 
      onClick={this.increaseCount}>+</button>
      <br/>
      </div>
    );
  }
}

export default TentacleFive;
