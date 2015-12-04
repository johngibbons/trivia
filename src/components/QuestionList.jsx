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
  getQuestions(){
    return this.props.questions || [];
  },
  render(){
    return (
      <div className="row">
        <AddForm
          handleSubmit={this.handleAddQuestion}
          label="Add Question"
          placeholder="Add question..."
          htmlFor="addQuestion"
          btnText="Add Question"
        />
        {this.getQuestions().map(id => {
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
      </div>
    );
  }
});

function mapStateToProps(state){
  return {
    questionsById: state.questionsById,
    answersById: state.answersById
  }
}

export default connect(mapStateToProps)(QuestionList);
