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
  entries.sort((a,b) => {
    let entryA = entriesById[a];
    let entryB = entriesById[b];

    return (calculateScore(entryB, questionsById) -
      calculateScore(entryA, questionsById));
  });

  let rank = 1;
  let prevScore;

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
        {entries.map((id, index) => {
          const entry = entriesById[id];
          const score = calculateScore(entry, questionsById);
          rank = score < prevScore ? index + 1 : rank;
          prevScore = score;
          return (
            <tr key={id} onClick={() => onClickEntry(id)}>
              <td>{rank}</td>
              <td>{entry.name}</td>
              <td>{score} / {currentPossible} (out of {totalPossible} total)</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
