import React from 'react';
import EntryList from './EntryList';
import AddForm from './AddForm';
import {connect} from 'react-redux';

let nextEntryId = 0;
const Game = React.createClass({
  handleAddEntry(input){
    this.props.dispatch({
      type: 'ADD_ENTRY',
      id: nextEntryId++,
      title: input.value,
      game: this.props.id
    });
  },
  render(){
    return(
      <div className="page-header">
        <h1>{this.props.title}</h1>
        <AddForm
          handleSubmit={this.handleAddEntry}
          label="Create Entry"
          htmlFor="addEntry"
          placeholder="Entry name..."
          btnText="Create New Entry"
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
