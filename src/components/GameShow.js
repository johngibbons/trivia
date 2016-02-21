import React from 'react';
import {Link} from 'react-router';
import {colors} from '../constants';

import EntriesList from './EntriesList';
import GameShareBox from './GameShareBox';
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
  hasGameStarted,
  onClickEntry
}) => {
  return (
    <div>
      <div className='container game-show'>
      {!hasGameStarted &&
        <GameShareBox url={location.href} />}
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
