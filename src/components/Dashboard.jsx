import React from 'react';
import AddForm from './AddForm';
import GameList from './GameList';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {addGame} from '../actions/index';

let nextGameId = 0;
const Dashboard = React.createClass({
  handleAddGame(input){
    this.props.dispatch(addGame(input));
  },
  render(){
    return(
      <div className="container">
        <div className="page-header">
          <h1>Welcome to Trvia</h1>
          <p className="lead">select a game below or create a new one to
            begin</p>
        </div>
        <AddForm
          label="Create A New Game"
          htmlFor="newGame"
          placeholder="Enter a title..."
          handleSubmit={this.handleAddGame}
          btnText="Create Game"
        />
        <GameList gamesById={this.props.gamesById} />
      </div>
    );
  }
});

function mapStateToProps(state){
  console.log('state', state);
  return {
    gamesById: state.gamesById
  };
}

export default connect(mapStateToProps)(Dashboard);
