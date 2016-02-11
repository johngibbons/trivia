import React from 'react';

const DropdownToggle = ({
  className,
  style,
  children,
  onClickToggle
}) => {
  const combinedClasses = className ?
    'dropdown-toggle '.concat(className) :
      'dropdown-toggle';

  return (
    <a href='#'
      className={combinedClasses}
      style={style}
      onClick={onClickToggle}
    >
      {children}
    </a>
  );
};

export default DropdownToggle;
