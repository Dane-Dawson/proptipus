import React from "react";
class TentacleOne extends React.Component {
  render() {
    return (
      <div className="tentacle-one">
      <span className="tentacle-tag">Tentacle 1 - Favorite Joke</span>
      <br/>
        <br/>
        <span className="joke-setup">How many tickles does it take to make me laugh?</span>
        <br/>
        <span className="punchline">
        {this.props.punchline} 
        {/* punchline prop should go here */}
        </span>
      </div>
    );
  }
}

export default TentacleOne;
