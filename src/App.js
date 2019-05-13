import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom'
import PlayerContainer from './PlayerContainer';
import TeamContainer from './TeamContainer';
import MatchupContainer from './MatchupContainer';
import ResultsContainer from './ResultsContainer';
import UserContainer from './UserContainer';
import Home from './Home';
import NavBar from "./NavBar";
import { Row, Col, Button } from 'reactstrap';


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
    computerPoints: 0,
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
     let computerPoints= computerScore - myScore
     console.log(myScore, computerScore);
     this.setState({
       myScore: myScore,
       computerScore: computerScore,
       points: points,
       computerPoints: computerPoints,
       mcIsVisible: false,
       rcIsVisible: true
     })
   }

   createUser = userInfo => {
     fetch('http://localhost:3000/api/v1/users', {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
             Accept: 'application/json'
       },
       body: JSON.stringify({name:this.state.nameBar, points:this.state.points, your_score:this.state.myScore, opponent_score:this.state.computerScore,  player1:this.state.myTeam[0].id, player2:this.state.myTeam[1].id, player3: this.state.myTeam[2].id, player4:this.state.myTeam[3].id, player5:this.state.myTeam[4].id, opponent1:this.state.computerTeam[0].id, opponent2:this.state.computerTeam[1].id, opponent3:this.state.computerTeam[2].id, opponent4:this.state.computerTeam[3].id, opponent5:this.state.computerTeam[4].id})
   })
   .then(response => response.json())
   .then(json => console.log(json)).then(this.setState({
     rcIsVisible: false,
     ucIsVisible: true
   }))

   }

   userSubmitHandler = (e, userInfo) => {
    
    this.createUser(userInfo);
    this.getUsers()
    this.props.history.push("/leaderboard");
  };

   handleUc = (e) => {this.setState({
     ucIsVisible: true
   })
 }

 turnOffUc = (e) => {this.setState({
   ucIsVisible: false
 })
}

render() {
  console.log(this.state.ucIsVisible)
    return (
      <div>
        <NavBar handleUc={this.handleUc} turnOffUc={this.turnOffUc}/>
      <Route path="/" render={Home} />
        <Route
            path="/play"
            render={() => {
              if(this.state.pcIsVisible===true) {
                return(
                  <div>
                <input placeholder={"Search Players"} value={this.state.searchBar} onChange={this.handleSearchInput}/>
                <Row>
                <Col xs="6"><PlayerContainer  budget={this.state.budget} players={this.filterPlayers()} addPlayer={this.addPlayer} /></Col>


                <Col xs="6"><h1 className="display-4">My Team</h1><TeamContainer players={this.state.myTeam} computer={this.state.computerTeam} removePlayer={this.removePlayer}/></Col>
                </Row>

                <Button color="primary" onClick={(event) => this.handleMatchup(event)}>Generate Matchup</Button>
                </div>
              );
            } else {
              console.log("empty");
              return null;
            }
          }}
        />


        {this.state.mcIsVisible ? (<MatchupContainer myTeam={this.state.myTeam} computerTeam={this.state.computerTeam} simulateMatchup={this.simulateMatchup}/>) : null}

        {this.state.rcIsVisible ? (<ResultsContainer myTeam={this.state.myTeam} computerTeam={this.state.computerTeam} myScore={this.state.myScore} computerScore={this.state.computerScore} handleNameInput={this.handleNameInput} nameBar={this.state.nameBar} createUser={this.userSubmitHandler} points={this.state.points}
          computerPoints={this.state.computerPoints}/>) : null}

        <Route
            path="/leaderboard"
            render={() => {
              if(this.state.ucIsVisible===true) {
                return(<UserContainer users={this.state.users.sort((a, b) => b.points - a.points)} />)
      } else {
        return (<UserContainer users={this.state.users.sort((a, b) => b.points - a.points)} />);
      }
    }}
  />
      </div>
    );
  }


}

export default withRouter(App);
