import React from 'react';
import calculateScore from '../helpers/calculate_score';

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
    <table
      className="entries-list table table-hover">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Entry</th>
          <th>Score</th>
          <th>Current Possible</th>
          <th>Total Possible</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => {
          const entryUser = usersById[entry.user];
          return (
            <tr
              className={currentUserEntry.id === entry.id ? 'owner' : ''}
              key={entry.id}
              onClick={() => onClickEntry(entry.id)}
            >
              <td>{entry.rank}</td>
              <td>
                <div className='media'>
                  <img
                    src={entryUser.avatarURL}
                    className='avatar-small img-fluid img-circle media-figure'
                    style={{marginRight: '1rem'}}
                  />
                  <span className='media-body'>
                    {entry.name}
                  </span>
                </div>
              </td>
              <td>{entry.score}</td>
              <td>{currentPossible}</td>
              <td>{totalPossible}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EntriesList;
