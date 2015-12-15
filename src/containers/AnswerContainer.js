import React from 'react';
import Answer from '../components/Answer';
import {connect} from 'react-redux';
import {removeAnswer, updateAnswerAttr} from '../actions/index';

class AnswerContainer extends React.Component {
  render() {
    return(
      <Answer
        {...props}
      />
    );
  }

  onUpdateText(input) {
    this.props.dispatch(updateAnswerAttr({ id: this.props.id, text: input }));
  }

}

export default connect()(AnswerContainer);
