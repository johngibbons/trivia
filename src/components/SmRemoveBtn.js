import React from 'react';
import Icon from './Icon';

const SmRemoveBtn = ({id, handleRemove}) => {
  return (
    <Icon
      className='remove right-centered'
      type='delete'
      aria-label='Delete'
      onClick={() => handleRemove(id)}
    >
    </Icon>
  );
};

SmRemoveBtn.PropTypes = {
  id: React.PropTypes.string.isRequired,
  handleRemove: React.PropTypes.func.isRequired
};

export default SmRemoveBtn;
