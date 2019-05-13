##NBA Matchup Simulator

NBA Matchup Simulator is a web app which determines if your can build a better team NBA lineup than a computer. Built a custom API with all of the players in the NBA along with relevant stats for the simulator. Press play and select 5 players. Press generate matchup to randomly generate a computer team. Press simulate to find out which team is better. Finally enter your name to the leaderboard.

##Getting Started

To begin using fork and clone the frontend and back end of the project. CD into backend project folder. Use rake to create and migrate the database. Use rails start to server.

` bash
rake db: create
`

` bash
rake db: migrate
`

`bash
rails start
`

CD into front end project folder. Use npm to install and start the react server

`bash
npm I && npm start
`


##Usage

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
      })
      console.log(newComputerTeam, newBudget, this.state.myTeam)
    }


##Built With

React.js
Reactstrap
Ruby on Rails
Postgressql

##Authors

Jordan Simon - Initial Work

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
