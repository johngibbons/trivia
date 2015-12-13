import React from 'react';
import {connect} from 'react-redux';
import {removeQuestion, updateQuestionAttr} from '../actions/index';
import QuestionList from '../components/QuestionList';

class QuestionListContainer extends React.Component {
  render() {
    return(
      <QuestionList
        questionsById={this.props.questionsById}
        questions={this.props.questions}
        removeQuestion={this.removeQuestion.bind(this)}
        updateTitle={this.updateTitle.bind(this)}
      />
    );
  }

  removeQuestion(props) {
    this.props.dispatch(removeQuestion(props));
  }

  updateTitle(text, id) {
    this.props.dispatch(updateQuestionAttr({id: id, text: text}));
  }
}

function mapStateToProps(state) {
  console.log('(questionsById) state is:', state);
  return {
    questionsById: state.questionsById,
  }
}

export default connect(mapStateToProps)(QuestionListContainer);
