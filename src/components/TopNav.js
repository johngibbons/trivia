import React from 'react';
import {Link} from 'react-router';

import AccountDropdownMenuContainer from '../containers/AccountDropdownMenuContainer';

const TopNav = ({
  gameTitle,
  toggleLoginModal
}) => {
  return(
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed'>
            <span className='sr-only'>Toggle Navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand pull-left'>Trvia</Link>
        </div>
        <AccountDropdownMenuContainer
          toggleLoginModal={toggleLoginModal}
        />
      </div>
    </nav>
  );
};

export default TopNav;
