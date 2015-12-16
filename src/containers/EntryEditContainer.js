import React from 'react';
import {connect} from 'react-redux';
import {updateEntryAttr} from '../actions/index';

import EntryEdit from '../components/EntryEdit'

class EntryEditContainer extends React.Component {
  render(){
    const game = this.props.gamesById[this.props.params.id];
    const entry = this.props.entriesById[this.props.params.entry] || {};
    console.log('entry', entry);
    return(
      <EntryEdit
        entry={entry}
        game={game}
        onUpdateName={this.updateName.bind(this)}
      />
    );
  }

  updateName(text) {
    this.props.dispatch(updateEntryAttr({
      id: this.props.params.entry,
      name: text
    }));
  }
}

function mapStateToProps(state, props) {
  return {
    gamesById: state.gamesById,
    entriesById: state.entriesById
  }
}

export default connect(mapStateToProps)(EntryEditContainer);
