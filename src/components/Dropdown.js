import React from 'react';

const Dropdown = ({isShowing, children}) => {
  return (
    <ul className='dropdown-menu' >
      {children}
    </ul>
  );
};

export default Dropdown;
