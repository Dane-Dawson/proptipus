import React from "react";

class TentacleSix extends React.Component {

  render() {
    return (
        <div className="tentacle-six">
        <span className="number-readout">
          {this.props.magicNumber}
        </span>
      </div>
    );
  }
}
export default TentacleSix;