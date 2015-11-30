import React from 'react';
import EntryList from './entry/EntryList';
import AddEntryForm from './entry/AddEntryForm';

export default React.createClass({
  render(){
    return(
      <div>
        <AddEntryForm />
        <EntryList
          entriesById={this.props.entriesById}
          questionsById={this.props.questionsById}
          answersById={this.props.answersById}
        />
      </div>
    );
  }
});
