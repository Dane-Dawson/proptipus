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
      onClick={this.props.decrease}>-</button>
      <button className="magic-remote-button color-2" 
      onClick={this.props.increase}>+</button>
      <br/>
      </div>
    );
  }
}

export default TentacleFive;
