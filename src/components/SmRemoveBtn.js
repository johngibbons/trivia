import React from 'react';
import Icon from './Icon';

const SmRemoveBtn = ({id, handleRemove}) => {
  return (
    <span
      className='remove action-link'
      onClick={() => handleRemove(id)}
    >
      delete
    </span>
  );
};

SmRemoveBtn.PropTypes = {
  id: React.PropTypes.string.isRequired,
  handleRemove: React.PropTypes.func.isRequired
};

export default SmRemoveBtn;
