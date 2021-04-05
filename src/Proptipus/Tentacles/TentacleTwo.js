import React from "react";

class TentacleTwo extends React.Component {
  render() {
    return (
      <div className="tentacle-two">
        <h2>I'm a Tentacle!</h2>
        <p>This tentacle should recieve an object as a prop, and use different keys from that object to render values</p>
      </div>
    );
  }
}

export default TentacleTwo;
