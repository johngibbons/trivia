import React from 'react';

const GameShareBox = ({url}) => {
  return (
    <div className='game-share-box alert alert-info'>
      <div className='text'>
        Invite Friends To Play With This Link
        <div className='sub-text'>(click to select)</div>
      </div>
      <input
        value={url}
        readOnly
        onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
      />
    </div>
  );
};

export default GameShareBox;
