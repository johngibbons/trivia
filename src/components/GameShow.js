import React from 'react';
import {Link} from 'react-router';
import {colors} from '../constants';

import EntriesList from './EntriesList';

const GameShow = ({
  id,
  title,
  user,
  entries,
  entriesById,
  questionsById,
  totalPossible,
  currentPossible,
  currentUser,
  toggleLoginModal,
  handleNewEntry,
  handleClickEntry
}) => {
  const isCurrentUser = currentUser.id === user;
  return (
    <div>
      <div className="page-header">
        <h1>
          {title || <span style={{color: colors.grayLight}}>untitled</span>}
        </h1>
        {isCurrentUser && <Link to={`/games/${id}/edit`}>edit</Link>}
        {isCurrentUser && ' | '}
        {isCurrentUser && <Link to={`/games/${id}/run`}>run</Link>}
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

export default GameShow;
