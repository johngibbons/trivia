import React from 'react';
import EntryList from './EntryList';
import AddForm from './AddForm';
import {connect} from 'react-redux';
import {Link, History} from 'react-router';
import {addEntry} from '../actions/index';

let nextEntryId = 0;
const Game = React.createClass({
  mixins: [History],
  handleCreateEntry(event){
    event.preventDefault();
    this.props.dispatch(addEntry(this.props));
    this.history.pushState(null, `entries/${nextEntryId}`);
  },
  render(){
    const currGame = this.props.gamesById[this.props.params.id];
    this.entries = currGame.entries || [];
    this.title = currGame.title;
    return(
      <div className="container">
        <div className="page-header">
          <h1>{this.title}</h1>
          <p className="lead">Select an entry to view or&nbsp;
            <Link
              to={`entries/${nextEntryId}`}
              onClick={this.handleCreateEntry}>
              create a new one
          </Link></p>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Entry</th>
              <th>Score</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {this.entries.map(id => {
              const entry = this.props.entriesById[id];
                return(
                  <tr key={entry.id}>
                    <th>
                      <Link to={`entries/${entry.id}`}>{entry.title}</Link>
                    </th>
                    <th>{entry.score}</th>
                    <th>{entry.rank}/{currGame.possible}</th>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    );
  }
});

function mapStateToProps(state){
  return {
    gamesById: state.gamesById,
    entriesById: state.entriesById
  };
}

export default connect(mapStateToProps)(Game);
