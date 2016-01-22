import React from 'react';
import classNames from 'classnames';

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
    dropdown: true,
    open: isDropdownShowing
  });

  return (
    <div>
        {currentUser.username ?
          <ul
            className='nav navbar-nav navbar-right'
          >
            <li className={dropdownClasses}>
              <a
                className='dropdown-toggle'
                href='#'
                style={{
                  padding: '0',
                  backgroundColor: 'inherit'
                }}
                onClick={toggleDropdown}
              >
                <span className='navbar-text'>{currentUser.username}</span>
                <AvatarSmall
                  url={currentUser.avatarURL || '/images/default-avatar.png'}
                  style={{
                    position: 'relative',
                    top: '7px'
                  }}
                />
              </a>
              <UserDropdown
                currentUser={currentUser}
                isDropdownShowing={isDropdownShowing}
                onLogout={handleLogout}
              />
            </li>
          </ul>
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
        }
    </div>
  );
};

export default AccountDropdownMenu;
