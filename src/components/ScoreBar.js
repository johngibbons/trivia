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
    leader: leader.currScore / totalPossible * 100,
    currentPossible: currentPossible / totalPossible * 100,
    totalPossible: 100
  };

  return (
    <div>
      <div className='progress'>
        <div
          className='progress-bar progress-bar-possible'
          style={{
            width: `${widths.currentPossible}%`
          }}
        ></div>
        <div
          className='progress-bar progress-bar-leader'
          style={{
            width: `${widths.leader}%`
          }}
        ></div>
        <div
          className='progress-bar progress-bar-owner'
          style={{
            width: `${widths.correct}%`
          }}
        ></div>
      </div>
      <table className='table score-bar-labels'>
        <thead>
          <tr>
            <th className='correct'>{isOwnScore ? 'You' : entry.name}</th>
            <th className='leader'>Leader</th>
            <th className='current-possible'>Current Possible</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='correct'>{correct}</td>
            <td className='leader'>{leader.currScore} ({leader.name})</td>
            <td className='current-possible'>{currentPossible}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBar;
