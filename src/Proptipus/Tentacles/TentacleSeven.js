import React from "react";

class TentacleSeven extends React.Component {
  render() {
    return (
      <div className="tentacle-seven">
        <input 
        type="radio" 
        value="show"
        /> Show
        <br/>
        <input 
        type="radio" 
        value="hide"
        /> Hide
      </div>
    );
  }
}

export default TentacleSeven;
