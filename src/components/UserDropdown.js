import React from 'react';

import DropdownLink from './DropdownLink';
import DropdownMenu from './DropdownMenu';

const UserDropdown = ({
  currentUser,
  isDropdownShowing,
  onLogout
}) => {
  return (
    <DropdownMenu
      style={{
        right: '1rem',
        left: 'auto'
      }}
    >
      <DropdownLink
        url={`/users/${currentUser.id}/games`}
      >
        My Games
      </DropdownLink>
      <DropdownLink
        url={`/users/${currentUser.id}`}
      >
        Account
      </DropdownLink>
      <li role='separator' className='divider'></li>
      <DropdownLink
        url='#'
        onClick={onLogout}
      >
        Log Out
      </DropdownLink>
    </DropdownMenu>
  );
};

export default UserDropdown;
