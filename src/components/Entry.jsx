import React from 'react';
import QuestionList from './QuestionList';
import EntryTitle from './EntryTitle';
import {connect} from 'react-redux';
import {removeEntry, updateEntry} from '../actions/index';

const Entry = React.createClass({
  handleRemove(){
    this.props.dispatch(removeEntry(this.props));
  },
  handleUpdateEntry(input){
    this.props.dispatch(updateEntry(input, this.props));
  },
  render(){
    return (
      <div className = "container">
        <div className="jumbotron">
          <EntryTitle title={this.props.title} />
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
