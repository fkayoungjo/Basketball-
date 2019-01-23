import React, { Component } from 'react';
import PlayerContainer from './PlayerContainer';
import TeamContainer from './TeamContainer';
import MatchupContainer from './MatchupContainer';
import ResultsContainer from './ResultsContainer';
import UserContainer from './UserContainer';

class App extends Component {
  state = {
    players: [],
    myTeam:[],
    searchBar: '',
    budget: 80,
    computerTeam: [],
    computerBudget: 80,
    myScore: 0,
    computerScore: 0,
    points: 0,
    nameBar: '',
    users: [],
    pcIsVisible: true,
    mcIsVisible: false,
    rcIsVisible: false,
    ucIsVisible: false
  }

  componentDidMount() {
    this.getPlayers()
    this.getUsers()
  }

  getPlayers = () => {
  fetch('http://localhost:3000/api/v1/players')
    .then(response => response.json())
    .then(data => {
      this.setState({
        players: data
      })
    })
  }

  getUsers = () => {
  fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(data => {
      this.setState({
        users: data
      })
    })
  }

  handleMatchup = (e) => {
    if(this.state.myTeam.length === 5) {
      this.generateMatchup()
    }
  }

  generateMatchup = (e) => {
    let newComputerTeam = []
    let newBudget = 80
    for (let i = 5; i > newComputerTeam.length;) {
      let newPlayer = this.state.players[Math.floor(Math.random() * 485) + 1];
      console.log(newPlayer)
      if((!newComputerTeam.includes(newPlayer)) && (newPlayer.price >= 1) && (newBudget >= newPlayer.price) && (newComputerTeam.length < 5) && (newBudget >= 0)) {
      newComputerTeam = [...newComputerTeam, newPlayer]
      newBudget = newBudget - newPlayer.price
        }
      };
      this.setState({
        computerTeam: newComputerTeam,
        computerBudget: newBudget,
        pcIsVisible: false,
        mcIsVisible: true
      })
      console.log(newComputerTeam, newBudget, this.state.myTeam)
    }





  addPlayer = (e, player) => {
    if ((!this.state.myTeam.includes(player)) && (this.state.budget >= player.price) && (this.state.myTeam.length <5)) {
    const newTeam = [...this.state.myTeam, player]
    const newBudget = this.state.budget - player.price
    this.setState({
      myTeam: newTeam,
      budget: newBudget
    })
  }
    console.log("team", this.state.myTeam)
  }

  removePlayer = (e, player) => {
    let team = this.state.myTeam.filter(person => {
      return person !== player;
    })
      this.setState({
      myTeam: team
    })
    console.log("team", this.state.myTeam)
  }

  handleSearchInput = (e) => {
    console.log(e.target.value)
    this.setState({searchBar: e.target.value})
  }

  handleNameInput = (e) => {
    console.log(e.target.value)
    this.setState({nameBar: e.target.value})
  }

  sumNumbers = (acc, cv) => acc + cv


  filterPlayers = () => {
    return this.state.players.filter(player => player.player_name.toLowerCase().includes(this.state.searchBar.toLowerCase()))
  }

  simulateMatchup = (e) => {
    const myArray = this.state.myTeam.map(player => {
      return (player.plus_minus)
    });
    const computerArray = this.state.computerTeam.map(player => {
      return (player.plus_minus)
    });
    let myScore = myArray.reduce(this.sumNumbers); let computerScore = computerArray.reduce(this.sumNumbers);
     myScore = myScore * 10;  computerScore = computerScore * 10;
     let points = myScore - computerScore;
     console.log(myScore, computerScore);
     this.setState({
       myScore: myScore,
       computerScore: computerScore,
       points: points,
       mcIsVisible: false,
       rcIsVisible: true
     })
   }

   createUser = (e) => {
     e.preventDefault()
     fetch('http://localhost:3000/api/v1/users', {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
             Accept: 'application/json'
       },
       body: JSON.stringify({name:this.state.nameBar, points:this.state.points, your_score:this.state.myScore, opponent_score:this.state.computerScore,  player1:this.state.myTeam[0].id, player2:this.state.myTeam[1].id, player3: this.state.myTeam[2].id, player4:this.state.myTeam[3].id, player5:this.state.myTeam[4].id, opponent1:this.state.computerTeam[0].id, opponent2:this.state.computerTeam[1].id, opponent3:this.state.computerTeam[2].id, opponent4:this.state.computerTeam[3].id, opponent5:this.state.computerTeam[4].id})
   })
   .then(response => response.json())
   .then(json => console.log(json))
   this.setState({
     rcIsVisible: false,
     ucIsVisible: true
   })
   }

render() {
    return (
      <div className="app">
        <h1>NBA Dream Match</h1>
        <h5>Postionless Fantasy for a Postionless NBA</h5>
        <h6>If you are a fan of the NBA you may have heard of the term postionless basketball. You no longer have to be held back by the constraints of traditional fantasy. In NBA Dream Match, postion doesn't matter! Build the best team possible and keep under budget. See if you can beat the computer. Click a player to add or remove him from your team. Once you have selected a press Generate Matchup to see your opponent. Press simulate to see if you can beat the computer. </h6>
        {this.state.pcIsVisible ? (<h3>Select 5 Players. Stay Under the Budget</h3>) : null}
        {this.state.pcIsVisible ? (<h6>Prices based on the 2018-19 season</h6>) : null}
        {this.state.pcIsVisible ? (<h5>Budget: ${this.state.budget}</h5>) : null}

        {this.state.pcIsVisible ? (<input placeholder={"Search"} value={this.state.searchBar} onChange={this.handleSearchInput}/>) : null}

        {this.state.pcIsVisible ? (<PlayerContainer  players={this.filterPlayers()} addPlayer={this.addPlayer} />) : null}
        {this.state.pcIsVisible ? (<h1>My Team</h1>) : null}


        {this.state.pcIsVisible ? (<TeamContainer players={this.state.myTeam} computer={this.state.computerTeam} removePlayer={this.removePlayer}/>) : null}
        {this.state.pcIsVisible ? (<button onClick={(event) => this.handleMatchup(event)}>Generate Matchup</button>) : null}


        {this.state.mcIsVisible ? (<MatchupContainer myTeam={this.state.myTeam} computerTeam={this.state.computerTeam} simulateMatchup={this.simulateMatchup}/>) : null}

        {this.state.rcIsVisible ? (<ResultsContainer myTeam={this.state.myTeam} computerTeam={this.state.computerTeam} myScore={this.state.myScore} computerScore={this.state.computerScore} handleNameInput={this.handleNameInput} nameBar={this.state.nameBar} createUser={this.createUser}/>) : null}

        {this.state.ucIsVisible ? (<UserContainer users={this.state.users} />) : null}
      </div>
    );
  }


}

export default App;
