import React from 'react';

import EntriesList from './EntriesList';

export default ({
  game,
  entriesById,
  handleNewEntry
}) => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>{game.title}</h1>
      </div>
      <button
        className="btn btn-primary"
        onClick={handleNewEntry}
      >New Entry</button>
      <h3>Scoreboard</h3>
      <EntriesList
        game={game}
        entriesById={entriesById}
      />
    </div>
  );
}
