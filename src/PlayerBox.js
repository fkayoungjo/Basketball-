import React from 'react';

const PlayerBox = (props) => {
      let showPlayer = () => {
                  return (
        <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>Price</th>
          <th>Name</th>
          <th>PPG</th>
          <th>REB</th>
          <th>AST</th>
          <th>STL</th>
          <th>BLK</th>
          <th>TOV</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.player.team_abbreviation}</td>
          <td>${props.player.price}</td>
          <td>{props.player.player_name}</td>
          <td>{props.player.pts}</td>
          <td>{props.player.reb}</td>
          <td>{props.player.ast}</td>
          <td>{props.player.stl}</td>
          <td>{props.player.blk}</td>
          <td>{props.player.tov}</td>
        </tr>
      </tbody>
      </table>
)}


      return(

                 showPlayer()



      )}


export default PlayerBox;
