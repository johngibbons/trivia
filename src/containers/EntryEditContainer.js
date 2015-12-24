import React from 'react';
import {connect} from 'react-redux';
import {updateEntryAttr, addOrUpdateSelection} from '../actions/index';

import EntryEdit from '../components/EntryEdit'

class EntryEditContainer extends React.Component {
  render(){
    const entry = this.props.entriesById[this.props.params.entry] || {};
    const game = entry.game ? this.props.gamesById[entry.game] : {};
    const questions = this.mapQuestionListToObjects(game);
    console.log('game', game);
    console.log('gamesById', this.props.gamesById);
    return(
      <EntryEdit
        entry={entry}
        game={game}
        questions={questions}
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

  selectAnswer(selection, question) {
    this.props.dispatch(addOrUpdateSelection({
      entry: this.props.params.entry,
      question,
      selection
    }));
  }

  mapQuestionListToObjects(game) {
    const questions = game && game.questions;

    if (questions && this.props.questionsById) {
      return questions.map(id => this.props.questionsById[id]);
    }
    return [];
  }
}


function mapStateToProps(state, props) {
  return {
    gamesById: state.gamesById,
    entriesById: state.entriesById,
    questionsById: state.questionsById,
    answersById: state.answersById
  }
}

export default connect(mapStateToProps)(EntryEditContainer);
