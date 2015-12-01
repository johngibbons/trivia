import React from 'react';
import {connect} from 'react-redux';
import EntryList from './entry/EntryList';
import AddEntryForm from './entry/AddEntryForm';

const App = React.createClass({
  render(){
    const {
      dispatch,
      entriesById,
      questionsById,
      answersById
    } = this.props;
    return(
      <div>
        <AddEntryForm />
        <EntryList
          entriesById={entriesById}
          questionsById={questionsById}
          answersById={answersById}
        />
      </div>
    );
  }
});

export default connect(state => state)(App)
