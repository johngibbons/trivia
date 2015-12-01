import React from 'react';
import QuestionList from './QuestionList';
import {connect} from 'react-redux';

const Entry = React.createClass({
  handleRemove(){
    this.props.dispatch({
      type: "REMOVE_ENTRY",
      id: this.props.id,
      game: this.props.game
    });
  },
  render(){
    return (
      <div>
        <div className="jumbotron">
          <h1>{this.props.title}
            <span className="label label-default">{this.props.rank}</span>
          </h1>
          <p className="entryScore">score: {this.props.score}</p>
          <button
            className="btn btn-danger"
            onClick={this.handleRemove}
          >
            Delete Entry
          </button>
        </div>
        <QuestionList
          entry={this.props.id}
          questions={this.props.questions}
          isMaster={this.props.isMaster}
          questionsById={this.props.questionsById}
          answersById={this.props.answersById}
          game = {this.props.game}
        />
      </div>
    );
  }
});

export default connect()(Entry);
