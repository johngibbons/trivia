import React from 'react';

import EntriesList from './EntriesList';
import Button from './Button';

export default ({
  currentUser,
  toggleLoginModal,
  title,
  entries,
  entriesById,
  questionsById,
  totalPossible,
  currentPossible,
  handleNewEntry,
  handleClickEntry
}) => {
  return (
    <div>
      <div className="page-header">
        <h1>{title}</h1>
      </div>
      <button
        className="btn btn-primary"
        onClick={currentUser.username ? handleNewEntry : toggleLoginModal}
      >New Entry</button>
      <h3>Scoreboard</h3>
      <EntriesList
        entries={entries}
        entriesById={entriesById}
        questionsById={questionsById}
        totalPossible={totalPossible}
        currentPossible={currentPossible}
        onClickEntry={handleClickEntry}
      />
    </div>
  );
};
