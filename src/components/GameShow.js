import React from 'react';
import {Link} from 'react-router';
import {colors} from '../constants';

import EntriesList from './EntriesList';
import ScoreDashboard from './ScoreDashboard';

const GameShow = ({
  id,
  title,
  isOwner,
  currentUserEntry,
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
      <div className='container'>
        <EntriesList
          entries={entries}
          entriesById={entriesById}
          currentUserEntry={currentUserEntry}
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
