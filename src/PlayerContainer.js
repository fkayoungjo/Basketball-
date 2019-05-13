import React from "react";
import PlayerBox from "./PlayerBox"
import { Table } from 'reactstrap';
export default class PlayerContainer extends React.Component {
  state= {
    parent: "playercontainer"
  }

  render() {

    const showPlayers = () => this.props.players.map(player => {
      return (
        <div  key={player.id} onClick={(event) => this.props.addPlayer(event, player)} >
          <PlayerBox  player={player} parent={this.state.parent}/>
        </div>
      );
    });
    const divStyle={
        width: "100%",
        float: 'left',
        postion: 'fixed'
      };

    return (
    <div>
         <h1 className="display-4">Players <h5 className="display-6">Budget: ${this.props.budget}</h5></h1>
         <div class="table-wrapper-scroll-y my-custom-scrollbar">
         <Table dark size="sm" hover border style={divStyle}>
         {showPlayers()}
         </Table>
         </div>
         </div>
       )
  }
}
