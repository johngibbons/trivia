import React from 'react';
import QuestionList from './QuestionList';

export default React.createClass({
  render(){
    return (
      <div>
        <div>
          <h1>{this.props.title}<span className="label label-default">{this.props.rank}</span></h1>
        </div>
        <div>
          <p className="entryScore">score: {this.props.score}</p>
          <QuestionList questions={this.props.questions} />
        </div>
      </div>
    );
  }
});
