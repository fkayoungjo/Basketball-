import React from 'react';

const UserBox = (props) => {
      let showUser = () => {
                  return(<h5> {props.user.name} {props.user.points}</h5>)
      }

      return(
            

                <h6> {showUser()}</h6>




      )}


export default UserBox;
