import React from 'react';
import {connect} from 'react-redux';
import GameEdit from '../components/GameEdit';
import {updateGameAttr, addQuestion} from '../actions/index';

class GameEditContainer extends React.Component {
  render() {
    const game = this.props.gamesById[this.props.params.id] || {};

    return(
      <GameEdit
        {...game}
        onUpdateTitle={this.updateTitle.bind(this)}
        onAddQuestion={this.addQuestion.bind(this)}
      />
    );
  }

  updateTitle(text) {
    this.props.dispatch(updateGameAttr({id: this.props.params.id, title: text}));
  }

  addQuestion(input) {
    this.props.dispatch(addQuestion(input, this.props.params.id))
  }

}

function mapStateToProps(state) {
  console.log('(gamesById) state is:', state);
  return {
    gamesById: state.gamesById
  }
}

export default connect(mapStateToProps)(GameEditContainer);
