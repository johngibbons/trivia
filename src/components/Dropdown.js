import React from 'react';

const Dropdown = ({isShowing, children, style, className}) => {

  const combinedClasses = className ?
    'dropdown '.concat(' ', className) :
      'dropdown';

  return (
    <div
      className={combinedClasses}
      style={style}
    >
      {children}
    </div>
  );
};

export default Dropdown;
