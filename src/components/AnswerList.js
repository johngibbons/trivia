import React from 'react';
import Answer from './Answer';

export default React.createClass({
  render(){
    const answers = this.props.answers || [];

    return(
      <div className="list-group">
        {answers.map(id => {
          const answer = this.props.answersById[id];
          return (
            <Answer
              key={answer.id}
              id={answer.id}
              text={answer.text}
              question={this.props.question}
            />
          );
        })}
      </div>
    );
  }
});
