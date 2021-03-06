import React from 'react';
import {Link} from 'react-router';

import AccountDropdownMenuContainer from '../containers/AccountDropdownMenuContainer';

const TopNav = ({
  currentUser,
  gameTitle,
  toggleLoginModal
}) => {
  return(
    <nav className='navbar navbar-light navbar-full'>
      <Link to='/' className='navbar-brand pull-left'>Trvia</Link>
      <AccountDropdownMenuContainer
        currentUser={currentUser}
        toggleLoginModal={toggleLoginModal}
      />
    </nav>
  );
};

export default TopNav;
