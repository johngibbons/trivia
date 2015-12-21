import React from 'react';
import {connect} from 'react-redux';
import GameEdit from '../components/GameEdit';
import {
  updateGameAttr,
  addQuestion,
  removeQuestion,
  updateQuestionAttr,
  addAnswer,
  removeAnswer,
  updateAnswerAttr
} from '../actions/index';

class GameEditContainer extends React.Component {
  render() {
    return(
      <GameEdit
        {...this.props.game}
        onUpdate={this.update.bind(this)}
        onAddQuestion={this.addQuestion.bind(this)}
        onRemoveQuestion={this.removeQuestion.bind(this)}
        onUpdateQuestion={this.updateQuestion.bind(this)}
        onAddAnswer={this.addAnswer.bind(this)}
        onRemoveAnswer={this.removeAnswer.bind(this)}
        onUpdateAnswer={this.updateAnswer.bind(this)}
      />
    )
  }

  update(game, attr, value) {
    this.props.dispatch(updateGameAttr({id: this.props.game.id, [attr]: value}));
  }

  addQuestion(input) {
    this.props.dispatch(addQuestion(input, this.props.game.id));
  }

  removeQuestion(question) {
    console.log('question', question);
    this.props.dispatch(removeQuestion(question, this.props.game.id));
  }

  updateQuestion(question, attr, value) {
    this.props.dispatch(updateQuestionAttr({id: question, [attr]: value}));
  }

  addAnswer(input, question) {
    this.props.dispatch(addAnswer(input, question));
  }

  removeAnswer(answer, question) {
    this.props.dispatch(removeAnswer(answer, question));
  }

  updateAnswer() {
    this.props.dispatch(updateAnswerAttr({id: question, [attr]: value}));
  }

}

export default connect()(GameEditContainer);
