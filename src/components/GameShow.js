import React from 'react';

import EntriesList from './EntriesList';
import GameShareBox from './GameShareBox';
import GameCompleteBox from './GameCompleteBox';

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
      {currentPossible === totalPossible &&
        <GameCompleteBox
          entries={entries}
          usersById={usersById}
        />}
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
