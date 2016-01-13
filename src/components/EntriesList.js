import React from 'react';
import calculateScore from '../helpers/calculate_score';

export default ({
  entries,
  entriesById,
  questionsById,
  totalPossible,
  currentPossible,
  onClickEntry
}) => {
  entries = entries || [];

  return(
    <table className="table table-hover">
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
            <tr key={entry.id} onClick={() => onClickEntry(entry.id)}>
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
