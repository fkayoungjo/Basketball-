import React from 'react';

const PlayerBox = (props) => {
      let showPlayer = () => {
            if(props.parent === 'playercontainer') {
                  return(<h5> {props.player.team_abbreviation} {props.player.player_name} ${props.player.price}</h5>)
            }
            else {
                  return (
                        <h5> {props.player.team_abbreviation} {props.player.player_name} ${props.player.price} PPG:{props.player.pts} REB:{props.player.reb} AST:{props.player.ast} TOV:{props.player.tov} STL: {props.player.stl} BLK: {props.player.blk}</h5>)
            }
      }

      return(

                <h6> {showPlayer()}</h6>



      )}


export default PlayerBox;
