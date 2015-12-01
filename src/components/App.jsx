import React from 'react';
import {connect} from 'react-redux';
import AddGameForm from './AddGameForm';
import GameList from './GameList';

const App = React.createClass({
  render(){
    return(
      <div className="container">
        <AddGameForm />
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
