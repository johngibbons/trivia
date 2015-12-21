import React from 'react';

const SmRemoveBtn = ({id, handleRemove}) => {
  return (
    <span
      className='glyphicon glyphicon-trash remove right-centered'
      aria-label='Delete'
      onClick={() => handleRemove(id)}
    >
    </span>
  );
};

SmRemoveBtn.PropTypes = {
  id: React.PropTypes.string.isRequired,
  handleRemove: React.PropTypes.func.isRequired
};

export default SmRemoveBtn
