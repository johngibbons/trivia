import React from 'react';

const Alert = ({type, children, onClear}) => {

  if (type === 'success') {
    setTimeout(() => {
      onClear();
    }, 3000);
  }

  return (
    <div className={`alert alert-${type}`} role='alert'>
      <button
        type="button"
        className="close pull-right"
        aria-label="Close"
        onClick={onClear}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      {children}
    </div>
  );
};

export default Alert;
