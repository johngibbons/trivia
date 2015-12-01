import React from 'react';
import Answer from './Answer';

export default React.createClass({
  getAnswers(){
    return this.props.answers || [];
  },
  render(){
    return(
      <div className="list-group">
        {this.getAnswers().map(id => {
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
