import React from 'react';

import EntriesList from './EntriesList';

export default ({
  title,
  entries,
  entriesById,
  handleNewEntry
}) => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>{title}</h1>
      </div>
      <button
        className="btn btn-primary"
        onClick={handleNewEntry}
      >New Entry</button>
      <h3>Scoreboard</h3>
      <EntriesList
        entries={entries || []}
        entriesById={entriesById}
      />
    </div>
  );
}
