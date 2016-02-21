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
    <div className="entries-list">
      <div className='heading table-row'>
        <div className='spacer' />
        <div className='heading-row flex-row'>
          <span>Score</span>
          <span>Out of</span>
          <span>Total Possible</span>
        </div>
      </div>
      <div>
        {entries.map((entry, index) => {
          const entryUser = usersById[entry.user];
          return (
            <div
              className={currentUserEntry.id === entry.id ? 'owner table-row' : 'table-row'}
              key={entry.id}
              onClick={() => onClickEntry(entry.id)}
            >
              <div className='media'>
                <span className='rank'>{entry.rank}</span>
                <img
                  src={entryUser.avatarURL}
                  className='avatar-small img-fluid img-rounded media-figure'
                  style={{marginRight: '1rem'}}
                />
                <span className='media-body'>
                  <div className='entry-name'>{entry.name || <span style={{color: colors.grayLight}}>No Name</span>}</div>
                  <div className='username'>{entryUser.name || 'anonymous'}</div>
                </span>
              </div>
              <div className='entry-stats flex-row'>
                <span className='entry-score'>{entry.score}</span>
                <span>{currentPossible}</span>
                <span>{totalPossible}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntriesList;
