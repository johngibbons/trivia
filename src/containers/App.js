import React from 'react';

import TopNav from '../components/TopNav';

export default ({children}) => {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
}
