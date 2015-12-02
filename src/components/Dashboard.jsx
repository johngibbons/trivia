import React from 'react';
import AddForm from './AddForm';
import GameList from './GameList';
import {connect} from 'react-redux';
import {Link} from 'react-router';

let nextGameId = 0;
const Dashboard = React.createClass({
  handleAddGame(input){
    this.props.dispatch({
      type: 'ADD_GAME',
      id: nextGameId++,
      title: input.value
    });
  },
  render(){
    return(
      <div className="container">
        <div className="page-header">
          <h1>Welcome to Trivial</h1>
          <p className="lead">select a game below or&nbsp;
            <Link
              to={`games/${nextGameId}`}
              onClick={this.handleCreateEntry}>
              create a new one
          </Link> to begin</p>
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
  return {
    gamesById: state.gamesById
  };
}

export default connect(mapStateToProps)(Dashboard);
