import React from 'react';

const PanelFooterBtn = ({
  onClick,
  children
}) => {
  return(
    <div className="panel-footer panel-footer-btn"
      onClick={onClick}
    >{children}</div>
  );
};

export default PanelFooterBtn;
