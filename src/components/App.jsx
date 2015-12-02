import React from 'react';
import {connect} from 'react-redux';
import AddForm from './AddForm';
import GameList from './GameList';

let nextGameId = 0;
const App = React.createClass({
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

export default connect(mapStateToProps)(App)
