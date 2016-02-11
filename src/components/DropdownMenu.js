import React from 'react';
import classNames from 'classnames';

const DropdownMenu = ({isOpen, children}) => {
  return (
    <div className='dropdown-menu'>
      {children}
    </div>
  );
};

export default DropdownMenu;
