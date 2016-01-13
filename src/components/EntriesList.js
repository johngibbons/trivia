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
  let rank = 1;
  let prevScore = 0;
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
        {entries.map(id => {
          const entry = entriesById[id];
          return (
            <tr key={id} onClick={() => onClickEntry(id)}>
              <td>{rank}</td>
              <td>{entry.name}</td>
              <td>{calculateScore(entry, questionsById)} / {currentPossible} (out of {totalPossible} total)</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
