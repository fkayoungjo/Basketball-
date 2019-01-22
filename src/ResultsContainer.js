import React from "react";
import TeamContainer from "./TeamContainer"
export default class ResultsContainer extends React.Component {

  render() {
    if(this.props.myScore > this.props.computerScore){
      return (
          <div>
          <h1>You Win {this.props.myScore} to {this.props.computerScore} </h1>
          <h3>My Team Score: {this.props.myScore - this.props.computerScore}</h3>
          <TeamContainer players={this.props.myTeam}/>
          <h4>VS</h4>
          <h3>Opponent Score: {this.props.computerScore - this.props.myScore}</h3>
          <TeamContainer players={this.props.computerTeam}/>
        </div>
      );
    }
    else {
      return (
        <div>
        <h1>You Lose {Math.round(this.props.myScore)} to {Math.round(this.props.computerScore)} </h1>
        <h3>Your Team </h3> <h4>Points: {Math.round(this.props.myScore - this.props.computerScore)}</h4>
        <TeamContainer players={this.props.myTeam}/>
        <h4>VS</h4>
        <h3>Opponent </h3> <h4>Score: {Math.round(this.props.computerScore - this.props.myScore)}</h4>
        <TeamContainer players={this.props.computerTeam}/>
      </div>
    );}
    };
  }
