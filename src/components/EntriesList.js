import React from 'react';
import calculateScore from '../helpers/calculate_score';

import {colors} from '../constants';

const EntriesList = ({
  entries,
  currentUserEntry,
  questionsById,
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
        </div>
      </div>
      <div>
        {entries.map((entry, index) => {
          const entryUser = usersById[entry.user];
          return (
            <div
              className={currentUserEntry.id === entry.id ? 'highlighted table-row' : 'table-row'}
              key={entry.id}
              onClick={() => onClickEntry(entry.id)}
            >
              <div className='media table-cell'>
                <span className='rank emphasized'>{entry.rank}</span>
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
                <span className='entry-score table-cell'>{entry.score}</span>
                <span className='table-cell'>{currentPossible}</span>
                <span className='table-cell'>{totalPossible}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntriesList;
