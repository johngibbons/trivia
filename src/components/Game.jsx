import React from 'react';
import EntryList from './EntryList';
import AddEntryForm from './AddEntryForm';
import {connect} from 'react-redux';

const Game = React.createClass({
  render(){
    return(
      <div className="page-header">
        <h1>{this.props.title}</h1>
        <AddEntryForm
          game={this.props.id}
        />
        <EntryList
          entriesById={this.props.entriesById}
          questionsById={this.props.questionsById}
          answersById={this.props.answersById}
          entries={this.props.entries}
          game={this.props.id}
        />
      </div>
    );
  }
});

function mapStateToProps(state){
  return {
    entriesById: state.entriesById
  };
}

export default connect(mapStateToProps)(Game);
