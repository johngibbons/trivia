import React from 'react';
import Question from './Question';

export default React.createClass({
  getQuestions(){
    return this.props.questions;
  },
  render(){
    return(
      <div className="row">
        {this.props.questions.map(question => {
          return (
            <Question
              id={question.id}
              key={question.id}
              isMaster={question.isMaster}
              hasResult={question.hasResult}
              isCorrect={question.isCorrect}
              ptValue={question.ptValue}
              answers={question.answers}
              text={question.text}
            />
          );
        })}
      </div>
    );
  }
});
