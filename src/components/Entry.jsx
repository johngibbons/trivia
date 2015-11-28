import React from 'react';
import QuestionList from './QuestionList';

export default React.createClass({
  render(){
    return (
      <div>
        <div>
          <h1>{this.props.title}</h1>
        </div>
        <div>
          <p className="entryScore">score: {this.props.score}</p>
          <p className="entryRank">current rank: {this.props.rank}</p>
          <QuestionList questions={this.props.questions} />
        </div>
      </div>
    );
  }
});
