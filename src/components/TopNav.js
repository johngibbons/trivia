import React from 'react';
import {Link} from 'react-router';

import AccountDropdownMenuContainer from '../containers/AccountDropdownMenuContainer';

const TopNav = ({
  gameTitle,
  toggleLoginModal
}) => {
  return(
    <nav className='navbar navbar-light navbar-full'>
      <Link to='/' className='navbar-brand pull-left'>Trvia</Link>
      <div className='nav navbar-nav'>
        <AccountDropdownMenuContainer
          toggleLoginModal={toggleLoginModal}
        />
      </div>
    </nav>
  );
};

export default TopNav;
