import React from 'react';
import Question from './Question';
import AddForm from './AddForm';

let nextQuestionId = 0;
export default React.createClass({
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
              removeQuestion={this.props.removeQuestion}
              addAnswer={this.props.addAnswer}
            />
          );
        })}
      </span>
    );
  }
});
