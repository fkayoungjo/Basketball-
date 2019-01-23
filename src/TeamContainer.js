import React from "react";
import PlayerBox from "./PlayerBox"

export default class TeamContainer extends React.Component {

  render() {


    const showPlayers = () => this.props.players.map(player => {
      return (
        <div key={player.id} onClick={(event) => this.props.removePlayer(event, player)}>
          <PlayerBox  player={player} />
        </div>
      );
    });

    return showPlayers();
  }
}
