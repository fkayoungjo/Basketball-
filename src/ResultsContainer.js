import React from "react";
import { Row, Col, Button } from 'reactstrap';

import TeamContainer from "./TeamContainer"
export default class ResultsContainer extends React.Component {

  render() {
    if(this.props.myScore > this.props.computerScore){
      return (
          <div>
          <h1>You Win {Math.round(this.props.myScore)} to {Math.round(this.props.computerScore)} </h1>
          <form onSubmit={(event) => this.props.createUser(event)}>
          <input placeholder={"Enter Your Name Here"} value={this.props.nameBar} onChange={this.props.handleNameInput}/>
          <input type="submit" value="Submit" />
          </form>
          <Row>
          <Col xs="6"><h2>My Team</h2></Col><Col xs="6"><h2>Computer</h2></Col>
          </Row>
          <Row>
          <Col xs="6">
          <TeamContainer players={this.props.myTeam}/>
          </Col>
          <Col xs="6">
          <TeamContainer players={this.props.computerTeam}/>
          </Col>
          </Row>
        </div>
      );
    }
    else {
      return (
        <div>
        <h1>You Lose {Math.round(this.props.myScore)} to {Math.round(this.props.computerScore)} </h1>
        <form onSubmit={(event) => this.props.createUser(event)}><input placeholder={"Enter Your Name Here"} value={this.props.nameBar} onChange={this.props.handleNameInput}/>
        <Button color="primary" type="submit" value="Submit">Submit</Button>
        </form>
        <Row>
        <Col xs="6"><h2>My Team</h2></Col><Col xs="6"><h2>Computer</h2></Col>
        </Row>
        <Row>
        <Col xs="6">
        <TeamContainer players={this.props.myTeam}/>
        </Col>
        <Col xs="6">
        <TeamContainer players={this.props.computerTeam}/>
        </Col>
        </Row>
      </div>
    )}
    }
  }
