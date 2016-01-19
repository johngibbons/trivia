import React from 'react';

const ScoreBar = ({
  isOwnScore,
  entry,
  correct,
  leader,
  currentPossible,
  totalPossible
}) => {

  let widths = {
    correct: correct / totalPossible * 100,
    leader: (leader - correct) / totalPossible * 100,
    currentPossible: (currentPossible - leader) / totalPossible * 100,
    totalPossible: 100
  };

  return (
    <div>
      <table className='table score-bar-labels'>
        <thead>
          <tr>
            <th className='correct'>{isOwnScore ? 'You' : entry.name}</th>
            <th className='leader'>Leader</th>
            <th className='current-possible'>Current Possible</th>
            <th className='total-possible'>Total Possible</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='correct'>{correct}</td>
            <td className='leader'>{leader.score} ({leader.entry})</td>
            <td className='current-possible'>{currentPossible}</td>
            <td className='total-possible'>{totalPossible}</td>
          </tr>
        </tbody>
      </table>
      <div className='progress'>
        <div
          className='progress-bar progress-bar-success'
          style={{
            width: `${widths.correct}%`
          }}
        ></div>
        <div
          className='progress-bar progress-bar-primary'
          style={{
            width: `${widths.leader}%`
          }}
        ></div>
        <div
          className='progress-bar progress-bar-warning'
          style={{
            width: `${widths.currentPossible}%`
          }}
        ></div>
        <div
          className='progress-bar progress-bar-danger'
          style={{
            width: `${widths.totalPossible}%`
          }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreBar;
