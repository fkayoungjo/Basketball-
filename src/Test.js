import React from 'react'
import PlayerContainer from './PlayerContainer';
import TeamContainer from './TeamContainer';
import MatchupContainer from './MatchupContainer';
import ResultsContainer from './ResultsContainer';

class Test extends React.Component{
  render(){
    return(
      <div>
      {this.state.pcIsVisible ? (<input placeholder={"Search"} value={this.state.searchBar} onChange={this.handleSearchInput}/>) : null}

      {this.state.pcIsVisible ? (<PlayerContainer  budget={this.state.budget} players={this.filterPlayers()} addPlayer={this.addPlayer} />) : null}
      {this.state.pcIsVisible ? (<h1>My Team</h1>) : null}


      {this.state.pcIsVisible ? (<TeamContainer players={this.state.myTeam} computer={this.state.computerTeam} removePlayer={this.removePlayer}/>) : null}
      {this.state.pcIsVisible ? (<button onClick={(event) => this.handleMatchup(event)}>Generate Matchup</button>) : null}


      {this.state.mcIsVisible ? (<MatchupContainer myTeam={this.state.myTeam} computerTeam={this.state.computerTeam} simulateMatchup={this.simulateMatchup}/>) : null}

      {this.state.rcIsVisible ? (<ResultsContainer myTeam={this.state.myTeam} computerTeam={this.state.computerTeam} myScore={this.state.myScore} computerScore={this.state.computerScore} handleNameInput={this.handleNameInput} nameBar={this.state.nameBar} createUser={this.createUser}/>) : null}
      </div>


    )
  }
}
export default Test
