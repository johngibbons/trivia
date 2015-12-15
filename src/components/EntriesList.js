import React from 'react';

export default () => {
  const entries = [0, 1, 2];
  const entriesById = {
    0: {
      id: 0,
      name: 'First Entry',
      complete: false,
      score: 75
    },
    1: {
      id: 1,
      name: 'Second Entry',
      complete: true,
      score: 75
    },
    2: {
      id: 2,
      name: 'Third Entry',
      complete: true,
      score: 32
    }
  };
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
          entry.score < prevScore && rank++;
          prevScore = entry.score;
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
