import React from 'react';

const GameCompleteBox = ({entries, usersById}) => {

  const winningEntry = entries[0] || {};
  const winningUser = usersById[winningEntry.user] || {};

  const secondEntry = entries[1] || {};
  const secondUser = usersById[secondEntry.user] || {};

  const thirdEntry = entries[2] || {};
  const thirdUser = usersById[thirdEntry.user] || {};

  return (
    <div className='game-complete-box'>
      <h1 className='title'>
        Final Results:
      </h1>
      <div className='results-container'>
        <div className='winner result'>
          <span className='badge'>1st</span>
          <div className='avatar-container'>
            <div className='img-container img-circle'>
              <img
                src={winningUser.avatarURL}
                className='avatar img-fluid media-figure'
              />
            </div>
          </div>
          <div className='name'>
            {winningEntry.name || 'no name'}
          </div>
        </div>
        <div className='second result'>
          <span className='badge'>2nd</span>
          <div className='avatar-container'>
            <div className='img-container img-circle'>
              <img
                src={secondUser.avatarURL}
                className='avatar img-fluid media-figure'
              />
            </div>
          </div>
          <div className='name'>
            {secondEntry.name || 'no name'}
          </div>
        </div>
        <div className='third result'>
          <span className='badge'>3rd</span>
          <div className='avatar-container'>
            <div className='img-container img-circle'>
              <img
                src={thirdUser.avatarURL}
                className='avatar img-fluid media-figure'
              />
            </div>
          </div>
          <div className='name'>
            {thirdEntry.name || 'no name'}
          </div>
        </div>
      </div>
      <h3 className='message'>Congratulations {winningEntry.name}!</h3>
    </div>
  );

};

export default GameCompleteBox;
