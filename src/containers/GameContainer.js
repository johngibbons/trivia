import React from 'react';
import {connect} from 'react-redux';

import Game from '../components/Game.js';

class GameContainer extends React.Component {
  render() {
    const {gamesById, questionsById, answersById, params, children} = this.props;
    const game = gamesById[params.game] || {};
    const questions = game.questions && game.questions.map(id => questionsById[id]) || [];

    return (
      <Game game={game} questions={questions} answersById={answersById} children={children} />
    );
  }
}

function mapStateToProps(state) {
  console.log('state at game container:', state);
  return {
    gamesById: state.gamesById,
    questionsById: state.questionsById,
    answersById: state.answersById
  }
}

export default connect(mapStateToProps)(GameContainer);
