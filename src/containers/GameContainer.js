import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import shortid from 'shortid';
import calculateLeader from '../helpers/calculate_leader';
import calculateTotalPossible from '../helpers/calculate_total_possible';
import calculateCurrentPossible from '../helpers/calculate_current_possible';
import {
  updateGameAttr,
  addQuestion,
  removeQuestion,
  updateQuestionAttr,
  addAnswer,
  removeAnswer,
  updateAnswerAttr,
  addEntry
} from '../actions/index';

import Game from '../components/Game.js';

class GameContainer extends React.Component {

  render() {
    const {
      gamesById,
      questionsById,
      answersById,
      entriesById,
      params,
      children
    } = this.props;
    const game = gamesById[params.game] || {};
    const questions = game.questions && game.questions.map(id => questionsById[id]) || [];
    const leader = calculateLeader(game, entriesById, questionsById);

    return (
      <Game
        {...game}
        questions={questions}
        answersById={answersById}
        questionsById={questionsById}
        entriesById={entriesById}
        children={children}
        leader={leader}
        totalPossible={calculateTotalPossible(game, this.props.questionsById)}
        currentPossible={calculateCurrentPossible(game, this.props.questionsById)}
        onUpdate={this.update.bind(this)}
        onAddQuestion={this.addQuestion.bind(this)}
        onRemoveQuestion={this.removeQuestion.bind(this)}
        onUpdateQuestion={this.updateQuestion.bind(this)}
        onAddAnswer={this.addAnswer.bind(this)}
        onRemoveAnswer={this.removeAnswer.bind(this)}
        onUpdateAnswer={this.updateAnswer.bind(this)}
        handleNewEntry={this.addEntry.bind(this)}
        handleClickEntry={this.goToEntry.bind(this)}
      />
    );
  }

  update(game, attr, value) {
    this.props.updateGameAttr({id: this.props.params.game, [attr]: value});
  }

  addQuestion(input) {
    this.props.addQuestion(input, this.props.params.game);
  }

  removeQuestion(question) {
    this.props.removeQuestion(question, this.props.params.game);
  }

  updateQuestion(question, attr, value) {
    this.props.updateQuestionAttr({id: question, [attr]: value});
  }

  addAnswer(question) {
    this.props.addAnswer(question);
  }

  removeAnswer(question, answer) {
    this.props.removeAnswer(answer, question);
  }

  updateAnswer(answer, attr, value) {
    this.props.updateAnswerAttr({id: answer, [attr]: value});
  }

  addEntry() {
    const newId = shortid.generate();
    this.props.addEntry(newId, this.props.params.game);
    this.props.history.pushState(null, `/entries/${newId}`);
  }

  goToEntry(entry) {
    this.props.history.pushState(null, `/entries/${entry}`);
  }
}

function mapStateToProps(state) {
  return {
    gamesById: state.gamesById,
    questionsById: state.questionsById,
    answersById: state.answersById,
    entriesById: state.entriesById
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateGameAttr,
    addQuestion,
    removeQuestion,
    updateQuestionAttr,
    addAnswer,
    removeAnswer,
    updateAnswerAttr,
    addEntry
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
