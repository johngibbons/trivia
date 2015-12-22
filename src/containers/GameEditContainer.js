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
        answersById={this.props.answersById}
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
    this.props.dispatch(removeQuestion(question, this.props.game.id));
  }

  updateQuestion(question, attr, value) {
    this.props.dispatch(updateQuestionAttr({id: question, [attr]: value}));
  }

  addAnswer(question) {
    this.props.dispatch(addAnswer(question));
  }

  removeAnswer(question, answer) {
    console.log('answer', answer);
    console.log('question', question);
    this.props.dispatch(removeAnswer(answer, question));
  }

  updateAnswer(answer, attr, value) {
    this.props.dispatch(updateAnswerAttr({id: answer, [attr]: value}));
  }

}

export default connect()(GameEditContainer);
