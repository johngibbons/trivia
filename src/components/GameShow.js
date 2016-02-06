import React from 'react';
import {Link} from 'react-router';
import {colors} from '../constants';

import EntriesList from './EntriesList';
import ScoreDashboard from './ScoreDashboard';

const GameShow = ({
  id,
  title,
  isOwner,
  hasEntry,
  entries,
  entriesById,
  questionsById,
  totalPossible,
  currentPossible,
  currentUser,
  toggleLoginModal,
  onClickEntry
}) => {
  return (
    <div>
      <ScoreDashboard
        entries={entries}
        entriesById={entriesById}
        questionsById={questionsById}
        totalPossible={totalPossible}
        currentPossible={currentPossible}
        onClickEntry={onClickEntry}
      />
      {isOwner && <Link to={`/games/${id}/edit`}>edit</Link>}
      {isOwner && ' | '}
      {isOwner && <Link to={`/games/${id}/run`}>run</Link>}
      <h3>Leaderboard</h3>
      <div className='container'>
        <EntriesList
          entries={entries}
          entriesById={entriesById}
          questionsById={questionsById}
          totalPossible={totalPossible}
          currentPossible={currentPossible}
          onClickEntry={onClickEntry}
        />
      </div>
    </div>
  );
};

export default GameShow;
