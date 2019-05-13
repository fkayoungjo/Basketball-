import React from "react";
import TeamContainer from "./TeamContainer";
import { Row, Col, Button } from 'reactstrap';

export default class MatchupContainer extends React.Component {
state={parent:'mc'}
  render() {
      return (
        <div>
          <h1 className="display-4">Matchup</h1>
          <Row>
          <Col xs="6"><h2 className="display-6">My Team</h2></Col><Col xs="6"><h2 className="display-6">Computer</h2></Col>
          </Row>
          <Row>
          <Col xs="6">
          <TeamContainer players={this.props.myTeam}/></Col>


          <Col xs="6"> <TeamContainer players={this.props.computerTeam}/>
          </Col>
          </Row>
          <Button color="primary" onClick={(event) => this.props.simulateMatchup(event)}>Simulate</Button>
        </div>
      );
    };
  }
