import React from "react";
import PlayerBox from "./PlayerBox";
import { Table } from 'reactstrap';

export default class TeamContainer extends React.Component {

  render() {


    const showPlayers = () => this.props.players.map(player => {
      return (
        <div key={player.id} onClick={(event) => this.props.removePlayer(event, player)}>
          <PlayerBox  player={player} />
        </div>
      );
    });
    const divStyle={
        width: "100%",
        float: 'right',
        postion: 'fixed'
      };

    return(
    <div>

    
    <br></br>
    <div class="table-wrapper-scroll-y my-custom-scrollbar">
    <Table dark size="sm" hover border style={divStyle}>
    {showPlayers()}
    </Table>
    </div>
    </div>
  )
  }
}
