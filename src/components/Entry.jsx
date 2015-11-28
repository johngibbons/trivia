import React from 'react';
import QuestionList from './QuestionList';

export default react.createClass({
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h1 className="panel-title"/>{this.props.title}</h1>
        </div>
        <div className="panel-body">
          <p className="entryScore"/>score: {this.props.score}</p>
          <p className="entryRank"/>current rank: {this.props.rank}</p>
          <QuestionList questions={this.props.questions} />
      </div>
      </div>
    );
  };
});
