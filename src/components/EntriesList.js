import React from 'react';

import {colors} from '../constants';
import classNames from 'classnames';

const EntriesList = ({
  hasGameStarted,
  entries,
  currentUserEntry,
  questions,
  usersById,
  totalPossible,
  currentPossible,
  onClickEntry
}) => {

  return(
    <div className="entries-list flex-table">
      <div className='heading table-row'>
        <div className='spacer table-cell' />
        <div className='table-sub-row table-cell'>
          <span className='table-cell'>Score</span>
          <span className='table-cell'>Out of</span>
          <span className='table-cell'>Total Possible</span>
        {!hasGameStarted &&
          <span className='table-cell'>Incomplete?</span>}
        </div>
      </div>
      <div>
        {entries.map((entry, index) => {

          const entryComplete = Object.keys(entry.selections).length === questions.length;

          const rankClasses = classNames({
            'rank': true,
            'emphasized': true,
            'up': entry.movement < 0,
            'down': entry.movement > 0,
            'neutral': entry.movement === 0
          });

          const completeClasses = classNames({
            'table-cell': true,
            'action-link': true,
            success: entryComplete,
            danger: !entryComplete
          });

          const entryUser = usersById[entry.user];
          return (
            <div
              className={currentUserEntry.id === entry.id ? 'highlighted table-row' : 'table-row'}
              key={entry.id}
              onClick={() => onClickEntry(entry.id)}
            >
              <div className='media table-cell'>
                <span className={rankClasses}>{entry.rank}</span>
                <img
                  src={entryUser.avatarURL}
                  className='avatar-small img-fluid img-rounded media-figure'
                  style={{marginRight: '1rem'}}
                />
                <span className='media-body'>
                  <div className='entry-name emphasized '>{entry.name || <span style={{color: colors.grayLight}}>No Name</span>}</div>
                  <div className='username'>{entryUser.name || 'anonymous'}</div>
                </span>
              </div>
              <div className='secondary-text table-sub-row table-cell'>
                <span className='entry-score table-cell'>{entry.currScore}</span>
                <span className='table-cell'>{currentPossible}</span>
                <span className='table-cell'>{totalPossible}</span>
              {!hasGameStarted &&
                <span className={completeClasses}>{!entryComplete ? 'yes' : 'no'}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntriesList;
