import React from 'react';

export default ({onClickClose, children}) => {
  return (
    <div className='modal-header'>
      <button
        type='button'
        className='close'
        aria-label='Close'
        onClick={onClickClose}
      >
        <span ariaHidden={true}>&times;</span>
      </button>
      <h4 className='modal-title'>{children}</h4>
    </div>
  );
};
