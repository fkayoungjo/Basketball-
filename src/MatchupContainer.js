import React from "react";
import TeamContainer from "./TeamContainer"
export default class MatchupContainer extends React.Component {

  render() {
      return (
        <div>
          <h3>My Team</h3>
          <TeamContainer players={this.props.myTeam}/>
          <h4>VS</h4>
          <h3>Opponent</h3>
          <TeamContainer players={this.props.computerTeam}/>
          <button onClick={(event) => this.props.simulateMatchup(event)}>Simulate</button>
        </div>
      );
    };
  }
