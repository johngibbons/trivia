import React from 'react';
import {connect} from 'react-redux';
import {addEntry} from '../actions/index';
import shortid from 'shortid';

import Game from '../components/Game';

class GameContainer extends React.Component {
  render() {
    console.log(this.props);
    const game = this.props.gamesById[this.props.params.id];
    return(
      <Game
        {...game}
        entriesById={this.props.entriesById}
        handleNewEntry={this.addEntry.bind(this)}
      />
    );
  }

  addEntry() {
    const newId = shortid.generate();
    this.props.dispatch(addEntry(newId, this.props.params.id));
    this.props.history.pushState(null, `games/${this.props.params.id}/entries/${newId}/edit`);
  }
}

function mapStateToProps(state) {
  return {
    gamesById: state.gamesById,
    entriesById: state.entriesById
  }
}

export default connect(mapStateToProps)(GameContainer);
