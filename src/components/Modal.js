import React from 'react';
import classNames from 'classnames';

export default ({isShowing, className, children}) => {

  let modalClasses = classNames({
    'modal': true,
    'fade': true,
    'in': isShowing
  });

  modalClasses = className ? modalClasses.concat(` ${className}`) : modalClasses;

  let dialogClasses = classNames({
    'modal-dialog': true,
    'in': isShowing
  });

  let backdropClasses = classNames({
    'modal-backdrop': true,
    'fade': true,
    'in': isShowing
  });

  return (
    <div>
      <div
        className={modalClasses}
        style={{display: isShowing && 'block'}}
        role='dialog'
      >
        <div className={dialogClasses}>
          <div className='modal-content'>
            {children}
          </div>
        </div>
      </div>
      <div
        className={backdropClasses}
        style={{display: isShowing ? 'block' : 'none'}}
      ></div>
    </div>
  );

};
