import React from 'react';

const Dropdown = ({isShowing, children, style}) => {
  return (
    <div className='dropdown-menu' style={style} >
      {children}
    </div>
  );
};

export default Dropdown;
