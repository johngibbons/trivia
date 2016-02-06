import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import shortid from 'shortid';
import calculateScore from '../helpers/calculate_score';
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

  getEntries(game) {
    return Object.keys(this.props.entriesById).filter((id) => {
      return this.props.entriesById[id].game === game;
    });
  }

  currentUserEntry(entries, currentUser) {
    return entries.filter((entry) => {
      return entry.user === currentUser.id;
    })[0];
  }

  addScoreToEntries(entries) {
    return entries.map((id, index) => {
      const entry = this.props.entriesById[id];
      const score = calculateScore(entry, this.props.questionsById);
      return Object.assign({}, this.props.entriesById[id], {score: score});
    });
  }

  addRankToEntries(entries) {
    let rank = 1;
    let prevScore;
    entries.sort((a,b) => {
      return (b.score - a.score);
    });

    return entries.map((entry, index) => {
      rank = entry.score < prevScore ? index + 1 : rank;
      prevScore = entry.score;
      return Object.assign({}, entry, {rank: rank});
    });
  }

  render() {

    const {
      location,
      currentUser,
      toggleLoginModal,
      gamesById,
      questionsById,
      answersById,
      entriesById,
      params,
      children
    } = this.props;

    let game;
    if (params.game) {
      game = gamesById[params.game] || {};
    } else if (params.entry) {
      const entry = entriesById[params.entry] || {};
      game = gamesById[entry.game] || {};
    }
    const questions = game.questions && game.questions.map(id => questionsById[id]) || [];
    const leader = calculateLeader(game, entriesById, questionsById);

    let entries = this.getEntries(game.id);
    entries = this.addScoreToEntries(entries);
    entries = this.addRankToEntries(entries);
    let totalPossible = calculateTotalPossible(game, this.props.questionsById);
    let currentPossible = calculateCurrentPossible(game, this.props.questionsById);
    return (
      <Game
        currentUser={currentUser}
        toggleLoginModal={toggleLoginModal}
        id={game.id}
        title={game.title}
        isOwner={currentUser.id === game.user}
        currentUserEntry={this.currentUserEntry(entries, currentUser)}
        hasGameStarted={currentPossible > 0}
        questions={questions}
        answersById={answersById}
        questionsById={questionsById}
        entriesById={entriesById}
        entries={entries}
        children={children}
        leader={leader}
        isEditable={location.pathname.includes('edit')}
        totalPossible={calculateTotalPossible(game, this.props.questionsById)}
        currentPossible={calculateCurrentPossible(game, this.props.questionsById)}
        onUpdate={this.update.bind(this)}
        onAddQuestion={this.addQuestion.bind(this)}
        onRemoveQuestion={this.removeQuestion.bind(this)}
        onUpdateQuestion={this.updateQuestion.bind(this)}
        onAddAnswer={this.addAnswer.bind(this)}
        onRemoveAnswer={this.removeAnswer.bind(this)}
        onUpdateAnswer={this.updateAnswer.bind(this)}
        onAddEntry={this.addEntry.bind(this)}
        onClickEntry={this.goToEntry.bind(this)}
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
    this.props.addEntry(newId, this.props.params.game, this.props.currentUser.id);
    this.props.history.pushState(null, `/entries/${newId}`);
  }

  goToEntry(entry) {
    this.props.history.pushState(null, `/entries/${entry}`);
  }
}

function mapStateToProps(state) {
  const remoteState = state.remote || {};
  return {
    currentUser: state.client.currentUser,
    gamesById: remoteState.gamesById,
    questionsById: remoteState.questionsById,
    answersById: remoteState.answersById,
    entriesById: remoteState.entriesById
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
