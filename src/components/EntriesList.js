import React from 'react';

export default ({
  entries,
  entriesById
}) => {
  let rank = 1;
  let prevScore = 0;
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
            <tr key={id}>
              <td>{rank}</td>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
