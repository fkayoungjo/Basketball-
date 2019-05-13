import React from "react";
import UserBox from "./UserBox";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class UserContainer extends React.Component {

  render() {

    const showUsers = () => this.props.users.map(user => {
      return (
        <div key={user.id} >
          <UserBox  user={user} />
        </div>
      );
    });

    return <div>
    <h3>Leaderboard</h3>
    <ListGroup>
    <ListGroupItem className="justify-content-between">{showUsers()}</ListGroupItem>
    </ListGroup>
    </div>
  }
}
