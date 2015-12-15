import React from 'react';
import Answer from '../components/Answer';
import {connect} from 'react-redux';
import {removeAnswer, updateAnswerAttr} from '../actions/index';

class AnswerContainer extends React.Component {
  render() {
    return(
      <Answer
        {...this.props}
        onUpdateText={this.updateText.bind(this)}
        onRemoveAnswer={this.removeAnswer.bind(this)}
      />
    );
  }

  updateText(input) {
    this.props.dispatch(updateAnswerAttr({ id: this.props.id, text: input }));
  }

  removeAnswer() {
    this.props.dispatch(removeAnswer(this.props.id, this.props.question));
  }

}

export default connect()(AnswerContainer);
