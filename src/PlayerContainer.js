import React from "react";
import PlayerBox from "./PlayerBox"
export default class PlayerContainer extends React.Component {
  state= {
    parent: "playercontainer"
  }

  render() {

    const showPlayers = () => this.props.players.map(player => {
      return (
        <div key={player.id} onClick={(event) => this.props.addPlayer(event, player)} >
          <PlayerBox  player={player} parent={this.state.parent}/>
        </div>
      );
    });

    return showPlayers();
  }
}
