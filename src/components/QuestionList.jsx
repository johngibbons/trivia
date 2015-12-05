import React from 'react';
import Question from './Question';
import AddForm from './AddForm';
import {connect} from 'react-redux';
import {addQuestion} from '../actions/index';

let nextQuestionId = 0;
const QuestionList = React.createClass({
  handleAddQuestion(input){
    this.props.dispatch(addQuestion(input, this.props));
  },
  render(){
    const questions = this.props.questions || [];
    return (
      <span>
        {questions.map(id => {
          const question = this.props.questionsById[id];
          return (
            <Question
              id={question.id}
              key={question.id}
              text={question.text}
              answers={question.answers}
              hasResult={question.hasResult}
              isCorrect={question.isCorrect}
              ptValue={question.ptValue}
              isMaster={this.props.isMaster}
              answersById={this.props.answersById}
              entry={this.props.entry}
              game={this.props.game}
            />
          );
        })}
      </span>
    );
  }
});

function mapStateToProps(state){
  console.log(state);
  return {
    questionsById: state.questionsById,
    answersById: state.answersById
  }
}

export default connect(mapStateToProps)(QuestionList);
