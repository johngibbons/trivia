import React from 'react';

import EntriesList from './EntriesList';
import GameShareBox from './GameShareBox';

const GameShow = ({
  usersById,
  currentUserEntry,
  entries,
  questions,
  totalPossible,
  currentPossible,
  hasGameStarted,
  onClickEntry
}) => {
  return (
    <div>
      <div className='container game-show'>
      {!hasGameStarted &&
        <GameShareBox url={location.href} />}
        <EntriesList
          hasGameStarted={hasGameStarted}
          entries={entries}
          questions={questions}
          currentUserEntry={currentUserEntry}
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
