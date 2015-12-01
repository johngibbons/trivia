import React from 'react';
import Question from './Question';
import AddQuestionForm from './AddQuestionForm';

export default React.createClass({
  getQuestions(){
    return this.props.questions || [];
  },
  render(){
    return (
      <div className="row">
        {this.props.isMaster && <AddQuestionForm entry={this.props.entry}/>}
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
            />
          );
        })}
      </div>
    );
  }
});
