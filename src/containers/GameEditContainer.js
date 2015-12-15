import React from 'react';
import {connect} from 'react-redux';
import GameEdit from '../components/GameEdit';
import {updateGameAttr, addQuestion, removeQuestion} from '../actions/index';

class GameEditContainer extends React.Component {
  render() {
    const game = this.props.gamesById[this.props.params.id] || {};

    return(
      <GameEdit
        {...game}
        onUpdateTitle={this.updateTitle.bind(this)}
        onAddQuestion={this.addQuestion.bind(this)}
        onRemoveQuestion={this.removeQuestion.bind(this)}
      />
    );
  }

  updateTitle(text) {
    this.props.dispatch(updateGameAttr({id: this.props.params.id, title: text}));
  }

  addQuestion(input) {
    this.props.dispatch(addQuestion(input, this.props.params.id))
  }

  removeQuestion(props) {
    this.props.dispatch(removeQuestion(props));
  }

}

function mapStateToProps(state) {
  return {
    gamesById: state.gamesById
  }
}

export default connect(mapStateToProps)(GameEditContainer);
