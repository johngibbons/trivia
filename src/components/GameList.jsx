import React from 'react';
import {connect} from 'react-redux';
import Game from './Game';

const GameList = React.createClass({
  getGames(){
    return this.props.gamesById || {};
  },
  render(){
    return(
      <div>
        {Object.keys(this.getGames()).map(id => {
          const game = this.props.gamesById[id];
          return(
            <Game
              key={game.id}
              id={game.id}
              title={game.title}
              entries={game.entries}
            />
          );
        })}
      </div>
    );
  }
});

export default connect()(GameList);
