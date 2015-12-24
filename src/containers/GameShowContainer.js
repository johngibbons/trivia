import React from 'react';
import {connect} from 'react-redux';
import {addEntry} from '../actions/index';
import shortid from 'shortid';

import GameShow from '../components/GameShow';

class GameShowContainer extends React.Component {
  render() {
    const game = this.props.gamesById[this.props.params.game];
    return(
      <GameShow
        game={game}
        entriesById={this.props.entriesById}
        handleNewEntry={this.addEntry.bind(this)}
        handleClickEntry={this.goToEntry.bind(this)}
      />
    );
  }

  addEntry() {
    const newId = shortid.generate();
    this.props.dispatch(addEntry(newId, this.props.params.game));
    this.props.history.pushState(null, `/entries/${newId}/edit`);
  }

  goToEntry(entry) {
    this.props.history.pushState(null, `/entries/${entry}/edit`);
  }
}

function mapStateToProps(state) {
  return {
    gamesById: state.gamesById,
    entriesById: state.entriesById
  }
}

export default connect(mapStateToProps)(GameShowContainer);
