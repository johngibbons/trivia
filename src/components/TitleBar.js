import React from 'react';

const TitleBar = ({children}) => {
  return (
    <div className='full-bleed title-bar'>
      {children}
    </div>
  );
};

export default TitleBar;
