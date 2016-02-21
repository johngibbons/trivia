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
  addEntry,
  updateEntryAttr,
  setFlash
} from '../actions/index';

import Game from '../components/Game.js';

class GameContainer extends React.Component {

  render() {
    const {
      currentUser,
      location,
      currentUserEntry,
      toggleLoginModal,
      game,
      gamesById,
      questionsById,
      answersById,
      entries,
      entry,
      leader,
      isOwner,
      totalPossible,
      currentPossible,
      usersById,
      params,
      context,
      children
    } = this.props;

    const questions = game.questions && game.questions.map(id => questionsById[id]) || [];

    return (
      <Game
        context={context}
        currentUser={currentUser}
        currentUserEntry={currentUserEntry}
        toggleLoginModal={toggleLoginModal}
        id={game.id}
        title={game.title}
        hasGameStarted={currentPossible > 0}
        questions={questions}
        answersById={answersById}
        questionsById={questionsById}
        usersById={usersById}
        entries={entries}
        entry={entry}
        children={children}
        leader={leader}
        isEditable={location.pathname.includes('edit')}
        isOwner={currentUser && currentUser.id === game.user}
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
        onUpdateEntry={this.handleUpdateEntry.bind(this)}
        onClickEntry={this.goToEntry.bind(this)}
        setFlash={setFlash}
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

  handleUpdateEntry(id, attr, value) {
    this.props.updateEntryAttr({
      id: id,
      [attr]: value
    });
  }

  addEntry() {
    if (Object.keys(this.props.currentUser).length) {
      const newId = shortid.generate();
      this.props.addEntry(newId, this.props.params.game, this.props.currentUser.id);
      this.props.history.pushState(null, `/entries/${newId}`);
    } else {
      this.props.toggleLoginModal();
    }
  }

  goToEntry(entry) {
    this.props.history.pushState(null, `/entries/${entry}`);
  }
}

function setGameEntries(gameId, entriesById, questionsById) {
  let rank = 1;
  let prevScore;
  return Object.keys(entriesById).filter((id) => {
    return entriesById[id].game === gameId;
  }).map((id) => {
    const entry = entriesById[id];
    const score = calculateScore(entry, questionsById);
    return {...entry, score: score};
  }).sort((a,b) => {
    return (b.score - a.score);
  }).map((entry, index) => {
    rank = entry.score < prevScore ? index + 1 : rank;
    prevScore = entry.score;
    return Object.assign({}, entry, {rank: rank});
  });
}

function setGame(params, gamesById, entriesById) {
  if (params.game) {
    return gamesById[params.game] || {};
  } else if (params.entry) {
    const entry = entriesById[params.entry] || {};
    return gamesById[entry.game] || {};
  }
}

function currentUserEntry(entries, currentUser) {
  return entries.filter((entry) => {
    return entry.user === currentUser.id;
  })[0] || {};
}

function setContext(path) {
  if (path.includes('edit')) {
    return 'edit';
  } else if (path.includes('run')) {
    return 'run';
  } else if (path.includes('entries')) {
    return 'entry';
  } else {
    return 'show';
  }
}

function mapStateToProps(state) {

  const remoteState = state.remote || {};
  const clientState = state.client || {};
  const game = setGame(
    clientState.router.params,
    remoteState.gamesById,
    remoteState.entriesById
  ) || {};
  const entries = setGameEntries(
    game.id,
    remoteState.entriesById,
    remoteState.questionsById
  ) || [];

  return {
    context: setContext(clientState.router.path),
    currentUserEntry: currentUserEntry(entries, clientState.currentUser),
    game: game,
    leader: calculateLeader(game, remoteState.entriesById, remoteState.questionsById),
    totalPossible: calculateTotalPossible(game, remoteState.questionsById),
    currentPossible: calculateCurrentPossible(game, remoteState.questionsById),
    questionsById: remoteState.questionsById,
    answersById: remoteState.answersById,
    entries: entries,
    entry: clientState.router.params.entry &&
      remoteState.entriesById[clientState.router.params.entry],
    usersById: remoteState.usersById
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
    addEntry,
    setFlash,
    updateEntryAttr
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
