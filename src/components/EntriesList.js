import React from 'react';
import calculateScore from '../helpers/calculate_score';

const EntriesList = ({
  entries,
  entriesById,
  currentUserEntry,
  questionsById,
  totalPossible,
  currentPossible,
  onClickEntry
}) => {
  entries = entries || [];
  currentUserEntry = currentUserEntry || {};

  return(
    <table className="entries-list table table-hover">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Entry</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => {
          return (
            <tr
              className={currentUserEntry.id === entry.id ? 'owner' : ''}
              key={entry.id}
              onClick={() => onClickEntry(entry.id)}
            >
              <td>{entry.rank}</td>
              <td>{entry.name}</td>
              <td>{entry.score} / {currentPossible} (out of {totalPossible} total)</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EntriesList;
