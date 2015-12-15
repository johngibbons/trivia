import React from 'react';
import {connect} from 'react-redux';
import Question from '../components/Question';
import {addAnswer, updateQuestionAttr} from '../actions/index';


class QuestionContainer extends React.Component {
  render() {
    return(
      <Question
        {...this.props}
        onUpdateText={this.updateText.bind(this)}
        onUpdatePtValue={this.updatePtValue.bind(this)}
        onAddAnswer={this.handleAddAnswer.bind(this)}
      />
    );
  }

  updateText(text) {
    this.props.dispatch(updateQuestionAttr({id: this.props.id, text: text}));
  }

  updatePtValue(value) {
    this.props.dispatch(updateQuestionAttr({id: this.props.id, ptValue: value}));
  }

  handleAddAnswer() {
    this.props.dispatch(addAnswer('', this.props.id));
  }

  cancel() {
    this.input.blur();
  }
};

export default connect()(QuestionContainer);
