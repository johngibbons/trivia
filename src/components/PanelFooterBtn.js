import React from 'react';

export default ({
  onClick,
  children
}) => {
  return(
    <div className="panel-footer panel-footer-btn"
      onClick={onClick}
    >{children}</div>
  );
}
