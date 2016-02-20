import React from 'react';
import classNames from 'classnames';
import {colors} from '../constants';

import AvatarSmall from './AvatarSmall';
import UserDropdown from './UserDropdown';

const AccountDropdownMenu = ({
  currentUser,
  handleFacebookLogin,
  handleLogout,
  toggleDropdown,
  isDropdownShowing,
  toggleModal,
  isModalShowing
}) => {

  const dropdownClasses = classNames({
    "nav-item": true,
    dropdown: true,
    open: isDropdownShowing
  });

  return (
    currentUser.username ?
      <div className={`${dropdownClasses} navbar-right`}>
        <a
          className='dropdown-toggle media'
          href='#'
          onClick={toggleDropdown}
        >
        <span
          className='media-body dropdown-link'
          style={{
            marginRight: '0.5rem'
          }}
        >{currentUser.username}</span>
          <AvatarSmall
            url={currentUser.avatarURL || '/images/default-avatar.png'}
            className='media-figure'
          />
        </a>
        <UserDropdown
          currentUser={currentUser}
          isDropdownShowing={isDropdownShowing}
          onLogout={handleLogout}
        />
      </div>
      :
      <p
        className={`${!currentUser.avatarURL && 'navbar-text'} navbar-right`}
      >
        <a
          className='navbar-link'
          href='#'
          onClick={toggleModal}
        >Log In</a>
      </p>
  );
};

export default AccountDropdownMenu;
