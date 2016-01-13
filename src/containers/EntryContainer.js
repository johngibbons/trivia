import React from 'react';
import {connect} from 'react-redux';
import {updateEntryAttr, addOrUpdateSelection} from '../actions/index';
import calculateScore from '../helpers/calculate_score';
import calculateLeader from '../helpers/calculate_leader';
import calculateTotalPossible from '../helpers/calculate_total_possible';
import calculateCurrentPossible from '../helpers/calculate_current_possible';

import Entry from '../components/Entry';

class EntryContainer extends React.Component {
  render(){
    const entry = this.props.entriesById[this.props.params.entry] || {};
    const game = entry.game ? this.props.gamesById[entry.game] : {};
    const questions = this.mapQuestionListToObjects(game);
    const leader = calculateLeader(game, this.props.entriesById, this.props.questionsById);
    return(
      <Entry
        entry={entry}
        game={game}
        questions={questions}
        correct={calculateScore(entry, this.props.questionsById)}
        leader={leader}
        totalPossible={calculateTotalPossible(game, this.props.questionsById)}
        currentPossible={calculateCurrentPossible(game, this.props.questionsById)}
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
  };
}

export default connect(mapStateToProps)(EntryContainer);
