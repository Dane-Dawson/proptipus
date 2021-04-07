import React from "react";
class TentacleOne extends React.Component {
  render() {
    return (
      <div className="tentacle-one">
      <br/>
        <br/>
        <span className="joke-setup">How many tickles does it take to make me laugh?</span>
        <br/>
        <span className="punchline">
        {this.props.punchline}
        </span>
      </div>
    );
  }
}

export default TentacleOne;
