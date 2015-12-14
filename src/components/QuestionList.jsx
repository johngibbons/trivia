import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';

export default class extends React.Component {
  render(){
    const questions = this.props.questions || [];
    return (
      <span>
        {questions.map(id => {
          const question = this.props.questionsById[id];
          return (
            <QuestionContainer
              key={id}
              question={question}
              removeQuestion={this.props.removeQuestion}
              updateTitle={this.props.updateTitle}
            />
          );
        })}
      </span>
    );
  }
}
