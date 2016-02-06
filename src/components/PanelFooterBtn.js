import React from 'react';

const PanelFooterBtn = ({
  onClick,
  children
}) => {
  return(
    <div
      className="card-footer panel-footer-btn"
      style={{borderTop: 'none'}}
      onClick={onClick}
    >{children}</div>
  );
};

export default PanelFooterBtn;
