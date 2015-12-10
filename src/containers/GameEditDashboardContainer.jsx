import React from 'react';
import {connect} from 'react-redux';
import GameEditDashboard from '../components/GameEditDashboard';
import {updateGameAttr, addQuestion} from '../actions/index';

class GameEditDashboardContainer extends React.Component {
  render() {
    const game = this.props.gamesById[this.props.params.id] || {};
    const title = game.title;
    const id = game.id;
    const questions = game.questions;

    return(
      <GameEditDashboard
        id={id}
        title={title}
        questions={questions}
        updateTitle={this.updateTitle.bind(this)}
        saveQuestion={this.saveQuestion.bind(this)}
      />
    );
  }

  updateTitle(text) {
    this.props.dispatch(updateGameAttr({id: this.props.params.id, title: text}));
  }

  saveQuestion(input) {
    this.props.dispatch(addQuestion(input, this.props.params.id))
  }

}

function mapStateToProps(state) {
  console.log('state is:', state);
  return {
    gamesById: state.gamesById
  }
}

export default connect(mapStateToProps)(GameEditDashboardContainer);
