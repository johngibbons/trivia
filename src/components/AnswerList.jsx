import React from 'react';
import Answer from './Answer';

export default React.createClass({
  getAnswers(){
    return this.props.answers || [];
  },
  chooseAnswer(){
    console.log("selected an answer");
  },
  render(){
    return(
      <div className="list-group">
        {this.getAnswers().map((answer) => {
          return (
            <Answer
              key={answer}
              text={answer}
              questionId={this.props.questionId}
              chooseAnswer={this.chooseAnswer}
            />
          );
        })}
      </div>
    );
  }
});
