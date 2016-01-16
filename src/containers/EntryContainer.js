import React from 'react';
import {connect} from 'react-redux';
import {updateEntryAttr, addOrUpdateSelection} from '../actions/index';

import Entry from '../components/Entry';

class EntryContainer extends React.Component {
  render(){
    let entry = this.props.entries.filter((entry) => {
      return entry.id === this.props.params.entry;
    });
    entry = entry[0] || {};
    return(
      <Entry
        entry={entry}
        gameId={this.props.id}
        gameTitle={this.props.title}
        questions={this.props.questions}
        correct={entry.score}
        leader={this.props.leader}
        totalPossible={this.props.totalPossible}
        currentPossible={this.props.currentPossible}
        answersById={this.props.answersById}
        onUpdateName={this.updateName.bind(this)}
        onSelectAnswer={this.selectAnswer.bind(this)}
      />
    );
  }

  updateName(id, attr, name) {
    this.props.dispatch(updateEntryAttr({
      id: this.props.params.entry,
      [attr]: name
    }));
  }

  selectAnswer(question, _, selection) {
    this.props.dispatch(addOrUpdateSelection({
      entry: this.props.params.entry,
      question,
      selection
    }));
  }
}


function mapStateToProps(state, props) {
  const remoteState = state.remote || {};
  return {
    gamesById: remoteState.gamesById,
    entriesById: remoteState.entriesById,
    questionsById: remoteState.questionsById,
    answersById: remoteState.answersById
  };
}

export default connect(mapStateToProps)(EntryContainer);
