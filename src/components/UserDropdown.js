import React from 'react';

import Dropdown from './Dropdown';
import DropdownLink from './DropdownLink';

const UserDropdown = ({
  currentUser,
  isDropdownShowing,
  onLogout
}) => {
  return (
    <Dropdown>
      <DropdownLink
        url='#'
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
    </Dropdown>
  );
};

export default UserDropdown;
