import React from 'react';

import Dropdown from './Dropdown';
import DropdownLink from './DropdownLink';

const UserDropdown = ({
  isDropdownShowing,
  onLogout
}) => {
  return (
    <Dropdown>
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
