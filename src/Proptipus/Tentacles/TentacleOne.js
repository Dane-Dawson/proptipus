import React from "react";

class TentacleOne extends React.Component {
  render() {
    return (
      <div className="tentacle-one">
        <h2>I'm a Tentacle!</h2>
        <p>This tentacle should recieve a prop from Proptipus and directly use that value. Maybe a stored img, string, or gif?</p>
      </div>
    );
  }
}

export default TentacleOne;
