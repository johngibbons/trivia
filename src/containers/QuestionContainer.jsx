import React from 'react';
import {connect} from 'react-redux';
import Question from '../components/Question';
import {addAnswer} from '../actions/index';


class QuestionContainer extends React.Component {
  render() {
    return(
      <Question
        {...this.props.question}
        answersById={this.props.answersById}
        onRemove={this.props.removeQuestion}
        onUpdateText={this.updateTitle.bind(this)}
      />
    );
  }

  updateTitle(text) {
    this.props.updateTitle(text, this.props.id);
  }

  handleSaveAnswer(input) {
    addAnswer(input, this.props.question);
    input.value = '';
  }

  cancel() {
    this.input.blur();
  }
};

function mapStateToProps(state) {
  console.log('(answersById) state is:', state);
  return {
    answersById: state.answersById
  }
}

export default connect(mapStateToProps)(QuestionContainer);
