import React from 'react';
import {Link} from 'react-router';
import {colors} from '../constants';

import EntriesList from './EntriesList';
import ScoreDashboard from './ScoreDashboard';

const GameShow = ({
  id,
  title,
  isOwner,
  usersById,
  currentUserEntry,
  entries,
  questionsById,
  totalPossible,
  currentPossible,
  toggleLoginModal,
  onClickEntry
}) => {
  return (
    <div>
      <ScoreDashboard
        entries={entries}
        questionsById={questionsById}
        totalPossible={totalPossible}
        currentPossible={currentPossible}
        onClickEntry={onClickEntry}
      />
      <div className='container game-show'>
        <EntriesList
          entries={entries}
          currentUserEntry={currentUserEntry}
          questionsById={questionsById}
          usersById={usersById}
          totalPossible={totalPossible}
          currentPossible={currentPossible}
          onClickEntry={onClickEntry}
        />
      </div>
    </div>
  );
};

export default GameShow;
