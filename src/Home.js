import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Home = (props) => {
      return(

<div>
<Jumbotron fluid>
        <Container fluid>
        <h3 className="display-4">Postionless Simulator for a Postionless NBA</h3>
        <h4 className="display-5">Select 5 Players. Stay Under the Budget</h4>
        <p className="lead">If you are a fan of the NBA you may have heard of the term postionless basketball. You no longer have to be held back by the constraints of traditional posiotns. Here postion doesn't matter! Build the best team possible and keep under budget. See if you can beat the computer. Click a player to add or remove him from your team. Once you have selected 5 players click Generate Matchup to see your opponent. Press simulate to see if you can beat the computer. Good Luck! </p>

        </Container>
     </Jumbotron>


        <br/>
</div>



      )}



export default Home;
