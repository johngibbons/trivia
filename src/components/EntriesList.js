import React from 'react';

export default ({
  game,
  entriesById,
  onClickEntry
}) => {
  let rank = 1;
  let prevScore = 0;
  const entries = game.entries || [];
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
              <td>{entry.score} / {game.possiblePts}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
