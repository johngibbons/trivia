import React from 'react';
import {connect} from 'react-redux';
import Game from './Game';
import {Link} from 'react-router';

const GameList = React.createClass({
  getGames(){
    return this.props.gamesById || {};
  },
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Game</th>
            <th>Entries</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.getGames()).map(id => {
            const game = this.props.gamesById[id];
            const numEntries = game.entries ? game.entries.length : 0;
            return(
                <tr key={game.id}>
                  <th>
                    <Link to={`games/${game.id}`}>{game.title}</Link>
                  </th>
                  <th>{numEntries}</th>
                  <th>{game.status}</th>
                </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
});

export default connect()(GameList);
