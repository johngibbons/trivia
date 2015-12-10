import React from 'react';
import Question from './Question';

export default class extends React.Component {
  render(){
    const questions = this.props.questions || [];
    return (
      <span>
        {questions.map(id => {
          const question = this.props.questionsById[id];
          return (
            <Question
              id={id}
              key={id}
              text={question.text}
              answers={question.answers}
              ptValue={question.ptValue}
              game={question.game}
              removeQuestion={this.props.removeQuestion}
              updateTitle={this.props.updateTitle}
            />
          );
        })}
      </span>
    );
  }
}
