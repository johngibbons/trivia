import React, { PropTypes } from 'react'
import './AccountDropdown.css'

import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

const AccountDropdown = (props) => {
  return (
    <IconMenu
      iconButtonElement={<IconButton><ExpandMoreIcon /></IconButton>}
    >
      <MenuItem primaryText="My Games" />
      <MenuItem primaryText="Account" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  )
}

AccountDropdown.propTypes = {

}

export default AccountDropdown
